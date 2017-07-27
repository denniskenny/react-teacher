import rootReducer from '../reducers';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';

const logger = createLogger();

function configureStoreDev(initialState = {}) {//in case you want different setups for diff environments - think turn off logging in prod etc
    const middleware = [ 
        //add in future workshop (thunk / loggers etc)
        thunk,
        logger,
        promiseMiddleware
    ];

    const store = createStore(rootReducer, initialState, compose (
        applyMiddleware(...middleware)
    ));
    return store;
}

const configureStore = configureStoreDev;
export default configureStore;
