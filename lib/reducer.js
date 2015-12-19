import { combineReducers } from 'redux'

const tasks = (state = [], action) => {
  switch (action.type) {
  case 'TODO_ADD':
    let task = action.payload
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

export default combineReducers({tasks})