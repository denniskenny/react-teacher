import { combineReducers } from 'redux';
import { classReducer} from './class/classReducer';

const rootReducer = combineReducers({//this allows you to have multiple reducers
    classes: classReducer //this is one particular reducer
});

export default rootReducer;