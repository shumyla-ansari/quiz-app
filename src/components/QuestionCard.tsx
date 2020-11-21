import React,{useState} from 'react'
import '../App.css'
import {questionPropsType} from '../Types/quiz_types'

const QuestionCard:React.FC<questionPropsType> = ({question, option, callback}) => {
let [selectedAns, setSelectedAns] = useState("");
const [color, setColor] = useState(false);

const handleSelect = (ev:React.ChangeEvent<HTMLInputElement>) => {
    const {value}= (ev.currentTarget)
    console.log(value)
    setSelectedAns(value)
    setColor(true);

}


    return (
        <div className="container">
            <div className="qst">{question}</div>
            <form className="question-form"
            onSubmit={(e: React.FormEvent<EventTarget>)=>callback(e, selectedAns)}>
                {
                    option.map((opt:string, ind: number)=>{
                        return(
                            <div key={ind}>
                       <label className="radio">
                           <input 
                           type="radio" 
                           name="opt"
                           required
                            value={opt}
                           checked={selectedAns === opt}
                            onChange={(ev: React.ChangeEvent<HTMLInputElement>)=>handleSelect(ev)}/>
                  {opt}
                           </label>
                           </div>
                           )})
                }
                <input type="submit" className ="submit"/>
                </form>

        </div>
    )
}

export default QuestionCard
