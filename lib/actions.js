import { isValidTodo } from "./validator"

// action
export const appendTask = (task) => {
  // Action pattenr
  // if(!isValidTodo(task)){
  //   return {type: "ERROR_MESSAGE", payload: "Input Some word"}
  // }
  return {type: "TODO_ADD", payload: task}
}

export const removeTask = (task) => {
  return {type: "TODO_REMOVE", payload: task}
}

export const errorMsg = (msg) => {
  return {type: "ERROR_MESSAGE", payload: msg}
}