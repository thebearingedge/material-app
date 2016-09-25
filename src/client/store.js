import { createStore, combineReducers } from 'redux'

const title = (state = 'Material App') => state
const rootReducer = combineReducers({ title })
const store = createStore(rootReducer)

export default store
