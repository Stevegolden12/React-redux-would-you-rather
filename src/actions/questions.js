import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js';
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addNewQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function addQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,     
    })
      .then((question) => dispatch(addNewQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

function addNewAnswer(answer) {
  return {
    type: ADD_QUESTION,
    answer,
  }
}

export function addAnswer({ qid, answer }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

     dispatch(showLoading())

    return _saveQuestionAnswer({
      qid,
      answer,
      author: authedUser,
    })
      .then((answer) => dispatch(addNewAnswer(answer)))
    .then(() => dispatch(hideLoading()))
  }
}