import React from 'react';

export type Quiz = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: Array<string>
    length: number
    question: string
    type: string
}

export enum Level {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = 'hard',
}

export type QuestionTypeQuiz = {

    question: string
    answer: string
    option: string[]
    correct_answer: string
    correct: boolean

}

export type questionPropsType = {
    question: string
    option: string[]
    callback: (e: React.FormEvent<EventTarget>, ans: string)=>void
    

}