import {createStore} from 'redux'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import reducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
// import {checkConnection} from '../actions/clip'

function createStoreForPage() {
    const logger = createLogger();
    let initialState = {};
    const composeEnhancers = composeWithDevTools({});
    const store = createStore(reducers, initialState ,composeEnhancers(applyMiddleware(thunk,logger)));

    // store.dispatch(checkConnection())

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}


export default  createStoreForPage;
