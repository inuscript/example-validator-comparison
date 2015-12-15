import { combineReducers } from 'redux'

const tags = (state = ["aa"], action) => {
  switch (action.type) {
  case 'ADD':
    state.push(action.payload)
    return state.concat()
  case 'REMOVE':
    let idx = state.indexOf(action.payload)
    if(index < 0){
      return state
    }
    state.splice(idx, 1)
    return state.concat()
  default:
    return state
  }
}

export default combineReducers({tags})