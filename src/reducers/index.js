import { combineReducers } from 'redux';
import { classReducer} from './class/classReducer';

const rootReducer = combineReducers({
    classes: classReducer
});

export default rootReducer;