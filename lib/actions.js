
// action
export const appendTag = (tag) => {
  return {type: "ADD", payload: tag}
}

export const removeTag = (tag) => {
  return {type: "REMOVE", payload: tag}
}