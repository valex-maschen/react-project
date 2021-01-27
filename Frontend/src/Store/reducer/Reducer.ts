import DOWNLOAD_PICTURE from '../actionTypes/index';

type Image = {
    url: 'string';
    title: 'string';
    importDatetime: 'string';
};

export type State = {
    image: Image;
};

type Action = {
    type: 'string';
    payload: any;
};
const initialState: State = {
    image: {} as Image
};

const ApiReducer = (state = initialState, action: Action) => {
    if (action.type === DOWNLOAD_PICTURE.FETCH_DATA) {
        return {
            ...state,
            image: action.payload
        };
    }
    return state;
};

export default ApiReducer;
