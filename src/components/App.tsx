import React, {  useState } from 'react';
import { BoxLoading } from 'react-loadingg';
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import { API } from './../services/API';
import { QuestionTypeQuiz, Level } from './../Types/quiz_types';
import QuestionCard from './QuestionCard'
import Header from './Header'
import '../App.css'



function App() {

    const headerAnimation = useWebAnimations<HTMLInputElement>({ ...bounce });

    let [quiz, setQuiz] = useState<QuestionTypeQuiz[]>([])
    let [currentStep, setCurrentStep] = useState(0);
    let [score, setScore] = useState(0);
    let [showResult, setShowResult] = useState(true);
   let [loading, setLoading] = useState(false);


        const fetchData = async() => {
      
            setLoading(true);
            setShowResult(false);
            const questions: QuestionTypeQuiz[] = await API(5, Level.EASY);
            console.log(questions);
            setQuiz(questions)
            setLoading(false);  
            setCurrentStep(0);
            setScore(0);

        }

    const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
        e.preventDefault();
        const currentQuestion: QuestionTypeQuiz = quiz[currentStep];

        if (userAns === currentQuestion.correct_answer) {
            setScore(++score)
        }

        if (currentStep !== quiz.length - 1)
            setCurrentStep(++currentStep)

       
        else {
            setShowResult(true)
          
        }
     console.log(currentStep);
    }


    if (showResult) {
       
        return (
            <div className="App-bg"><h1 className="h1"  ref ={headerAnimation.ref} >React Quiz</h1>
           <h1 className="container">Your Score : {score} / {quiz.length}</h1>
             <button className='start' onClick={fetchData}>Start</button>
            </div>
        )
    }

    console.log(quiz)
    return (
      
       <div className="App-bg">

            <Header />
            { quiz && currentStep === 5 && showResult ? (
          <button className='start' onClick={fetchData}>
            Start
          </button>
        ) : null}
            {loading && <BoxLoading />}


        { !loading && !showResult ? <QuestionCard
                option={quiz[currentStep].option}
                question={quiz[currentStep].question}
        callback={handleSubmit}
        /> : null}



      </div>
        )
}

export default App

