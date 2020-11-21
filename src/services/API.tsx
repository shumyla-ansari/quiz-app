import {Quiz, QuestionTypeQuiz, Level} from './../Types/quiz_types'

const shuffleArray = (array: any[]) =>
[...array].sort(() => Math.random() - 0.5)

export const API = async(totalQuestions: number, level: Level ) : Promise<QuestionTypeQuiz[]> => {
    const res = await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&category=9&difficulty=${level}&type=multiple`);
    let { results } = await res.json();
    console.log(results)

   const quiz:QuestionTypeQuiz[] = results.map((questionObj : Quiz) => {
       return {
    question: questionObj.question,
    answer: questionObj.correct_answer,
    option: shuffleArray(questionObj.incorrect_answers.concat(questionObj.correct_answer)),
    correct_answer: questionObj.correct_answer
   }

})
return quiz

}

