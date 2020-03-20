import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from '../reducers'

export default () => {
    let middlewares = [reduxThunk]
    let store = createStore(reducers, applyMiddleware(...middlewares))
    return store
}