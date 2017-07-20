import rootReducer from '../reducers';
import { createStore, compose, applyMiddleware } from 'redux';

function configureStoreDev(initialState) {
    const middleware = [ 
        //add in future workshop (thunk / loggers etc)
    ];

    const store = createStore(rootReducer, initialState, compose (
        applyMiddleware(...middleware)
    ));
    return store;
}

const configureStore = configureStoreDev;
export default configureStore;
