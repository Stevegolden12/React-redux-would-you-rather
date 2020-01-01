import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questions';

export default function questions(state = {}, action) {
  switch (action.type) {
    //insert case and default here
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    default:
      return state
  }
}