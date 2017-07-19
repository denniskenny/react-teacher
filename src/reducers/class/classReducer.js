import { RECIEVE_GETCLASSES_RESPONSE } from './../../constants/actionTypes';

export const classReducer = (state = [], action = {}) => {
    switch (action.type) {
        case RECIEVE_GETCLASSES_RESPONSE:
            if (action.type === "start") {
                return { isLoading: true, error: false }
            } else if (action.error) {
                return { isloading: false, error: true }
            } else {
                return { isLoading: false, error: false, list: action.payload.data };
            }
        default:
            return state;
    }
};
