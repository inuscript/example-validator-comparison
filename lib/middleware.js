import {isValidTodo} from "./validator"
import * as actions from "./actions"

const doValidate = (action) => {
  let errors = []
  switch(action.type){
    case "TODO_ADD":
      if(!isValidTodo(action.payload)){
        return "Invalid Task"
      }
  }
}

export const validate = ({ dispatch, getStore }) => next => action => {
  let error = doValidate(action)
  if(error){
    dispatch(actions.errorMsg(error))
    return
  }
  let result = next(action)
  return result
}