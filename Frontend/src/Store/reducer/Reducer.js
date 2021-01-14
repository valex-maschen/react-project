import { FETCH_DATA } from '../actionTypes/index';

const initialState = {
    data: []
};

const ApiReducer = (state = initialState, action) => {
    if (action.type === FETCH_DATA) {
        return {
            ...state,
            data: action.payload
        };
    }
    return state;
};

export default ApiReducer;
