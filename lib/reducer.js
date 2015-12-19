import { combineReducers } from 'redux'
import { isValidTodo } from "./validator"

const tasks = (state = [], action) => {
  switch (action.type) {
  case 'TODO_ADD':
    let task = action.payload
    // Reducer pattern 1 ( simple ignore )
    // if(isValidTodo(task)){
    //   state.push(task)
    // }
    state.push(task)
    return state.concat()
  case 'TODO_REMOVE':
    let idx = state.indexOf(action.payload)
    if(idx < 0){
      return state
    }
    state.splice(idx, 1)
    return state.concat()
  default:
    return state
  }
}

const errorMessage = (state = null, action) => {
  switch(action.type) {
  case 'ERROR_MESSAGE':
    return action.payload
  }
  return state
}

export default combineReducers({tasks, errorMessage})