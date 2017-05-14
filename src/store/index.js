import {createStore} from 'redux'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import reducers from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createLogger} from 'redux-logger'
// import {checkConnection} from '../actions/clip'

function createStoreForPage() {
  let initialState = {}
  let middleware

  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(applyMiddleware(thunk, createLogger()))
  } else {
    middleware = applyMiddleware(thunk)
  }

  const store = createStore(reducers, initialState, middleware)

  // store.dispatch(checkConnection())

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default createStoreForPage
