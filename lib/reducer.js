import { combineReducers } from 'redux'

const tags = (state = ["aa"], action) => {
  switch (action.type) {
  case 'ADD':
    state.push(action.payload)
    return state.concat()
  case 'REMOVE':
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
export default combineReducers({tags, errorMessage})