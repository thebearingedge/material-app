import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import thunk from 'redux-thunk'

const title = (state = 'Material App') => state

const appStore = (reducers = { title }, middlewares = [], environment = {}) => {

  const rootReducer = combineReducers({ ...reducers, routing })
  const middleware = applyMiddleware(
    thunk.withExtraArgument(environment),
    ...middlewares
  )

  return createStore(rootReducer, {}, middleware)
}

export default appStore
