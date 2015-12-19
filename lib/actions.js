import { isValidTag } from "./validator"

// action
export const appendTag = (tag) => {
  // Action pattenr
  // if(!isValidTag(tag)){
  //   return {type: "ERROR_MESSAGE", payload: "Input Some word"}
  // }
  return {type: "TAG_ADD", payload: tag}
}

export const removeTag = (tag) => {
  return {type: "TAG_REMOVE", payload: tag}
}

export const errorMsg = (msg) => {
  return {type: "ERROR_MESSAGE", payload: msg}
}