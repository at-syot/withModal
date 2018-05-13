import { 
  applyMiddleware,
  combineReducers, 
  createStore 
} from 'redux'

import modal from './reducers'

const rootReducer = combineReducers({
  modal
})

const store = (initialState, opt) =>
  createStore(rootReducer)

export default store
