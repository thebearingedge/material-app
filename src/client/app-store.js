import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware, browserHistory } from 'react-router-redux'
import thunk from 'redux-thunk'

const title = (state = 'Material App') => state

const appStore = (reducers = { title }, middlewares = [], state = {}, env = {}) => {

  const rootReducer = combineReducers({ ...reducers, routing: routerReducer })
  const middleware = applyMiddleware(
    routerMiddleware(browserHistory),
    thunk.withExtraArgument(env),
    ...middlewares
  )

  return createStore(rootReducer, state, middleware)
}

export default appStore
