
// action
export const appendTag = (tag) => {
  return {type: "TAG_ADD", payload: tag}
}

export const removeTag = (tag) => {
  return {type: "TAG_REMOVE", payload: tag}
}

export const errorMsg = (msg) => {
  return {type: "ERROR_MESSAGE", payload: msg}
}