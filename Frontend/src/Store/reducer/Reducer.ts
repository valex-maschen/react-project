import DOWNLOAD_PICTURE from '../actionTypes/index';

type Image = {
    imageUrl: 'string';
    title: 'string';
    importDatetime: 'string';
};

export type State = {
    image: Image;
    historyImg: Image[];
};

type Action = {
    type: 'string';
    payload: Image;
};
const initialState: State = {
    image: {} as Image,
    historyImg: []
};

const ApiReducer = (state = initialState, action: Action) => {
    if (action.type === DOWNLOAD_PICTURE.FETCH_GIF_SUCCESS) {
        return {
            ...state,
            image: { ...action.payload },
            historyImg: [...state.historyImg, { ...action.payload }]
        };
    }
    return state;
};

export default ApiReducer;
