import { combineReducers } from 'redux'
import { isValidTag } from "./validator"

const tags = (state = ["aa"], action) => {
  switch (action.type) {
  case 'TAG_ADD':
    let tag = action.payload
    // Reducer pattern 1 ( simple ignore )
    // if(isValidTag(tag)){
    //   state.push(tag)
    // }
    state.push(tag)
    return state.concat()
  case 'TAG_REMOVE':
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

const getErrorMessage = (state, action) => {
  switch(action.type) {
  case 'TAG_ADD':
    if(isValidTag(action.payload)){
      return "Input some word";
    }
  return null
}
function (state, action){
  const err = getErrorMessage(state, action)
  if(err){
    
  }
}
export default combineReducers({tags, errorMessage})