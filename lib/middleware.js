
export const validate = store => next => action => {
  let result = next(action)
  console.log("middleware")
  return result
}