import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js';

import ADD_QUESTION = 'ADD_QUESTION';
import ADD_ANSWER = 'ADD_ANSWER';

function addNewQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function addQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

   // dispatch(showLoading())

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,     
    })
      .then((question) => dispatch(addNewQuestion(question)))
      //.then(() => dispatch(hideLoading()))
  }
}

function addNewAnswer(answer) {
  return {
    type: ADD_QUESTION,
    answer,
  }
}

export function addQuestion({ qid, answer }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    // dispatch(showLoading())

    return _saveQuestion({
      qid,
      answer,
      author: authedUser,
    })
      .then((answer) => dispatch(addNewAnswer(answer)))
    //.then(() => dispatch(hideLoading()))
  }
}