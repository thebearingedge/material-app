import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const title = (state = 'Material App') => state

const appStore = (reducers = { title }, initialState = {}, environment = {}) => {
  const rootReducer = combineReducers(reducers)
  const middleware = applyMiddleware(thunk.withExtraArgument(environment))

  return createStore(rootReducer, initialState, middleware)
}

export default appStore
