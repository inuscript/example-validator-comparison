import { createStore, applyMiddleware } from 'redux'

import reducer from "./reducer"
import { validate } from "./middleware"

export const generateStore = () => {
  return createStore(reducer)
  return applyMiddleware(validate)(createStore)(reducer)
}

