import { createStore, applyMiddleware } from 'redux'

import reducer from "./reducer"
import { validate } from "./middleware"

export const generateStore = () => {
  return applyMiddleware(validate)(createStore)(reducer)
}

