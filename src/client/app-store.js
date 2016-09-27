import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerReducer as routing, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

const title = (state = 'Material App') => state

const appStore = (reducers = { title }, middlewares = [], state = {}, env = {}) => {

  const rootReducer = combineReducers({ ...reducers, routing })
  const middleware = applyMiddleware(
    routerMiddleware(browserHistory),
    thunk.withExtraArgument(env),
    ...middlewares
  )

  return createStore(rootReducer, state, middleware)
}

export default appStore
