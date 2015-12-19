// action
export const appendTask = (task) => {
  return {type: "TODO_ADD", payload: task}
}

export const removeTask = (task) => {
  return {type: "TODO_REMOVE", payload: task}
}
