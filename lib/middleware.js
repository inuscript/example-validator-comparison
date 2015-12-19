import {isValidTag} from "./validator"
import * as actions from "./actions"

const doValidate = (action) => {
  let errors = []
  switch(action.type){
    case "TAG_ADD":
      if(!isValidTag(action.payload)){
        return "Invalid tag"
      }
  }
}

export const validate = ({ dispatch, getStore }) => next => action => {
  let error = doValidate(action)
  if(error){
    dispatch(actions.errorMsg(error))
  }
  let result = next(action)
  return result
}