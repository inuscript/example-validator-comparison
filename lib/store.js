import { createStore, applyMiddleware } from 'redux'

import reducer from "./reducer"

export const generateStore = () => {
  return createStore(reducer)
}

