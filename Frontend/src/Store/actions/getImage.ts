import axios from 'axios';
import DOWNLOAD_PICTURE from '../../Store/actionTypes/index';

const url = 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';

function fetchGif() {
    return (dispatch: any) => {
        dispatch({ type: DOWNLOAD_PICTURE.FETCH_GIF_START });

        axios
            .get(url)
            .then((res) => {
                const { image_url: url, title, import_datetime: importTime } = res.data.data;

                dispatch({
                    type: DOWNLOAD_PICTURE.FETCH_GIF_SUCCESS,
                    payload: {
                        imageUrl: url,
                        title,
                        importDatetime: importTime
                    }
                });

                return res;
            })
            .catch((err) => {
                dispatch({
                    type: DOWNLOAD_PICTURE.FETCH_GIF_ERROR,
                    payload: err
                });
            });
    };
}

export default fetchGif;
