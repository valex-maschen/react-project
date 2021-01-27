import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DownloadWindow.module.css';
import { State } from '../../Store/reducer/Reducer';

const url = 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';

function FetchingData() {
    const content = useSelector((state: State) => state);
    const dispatch = useDispatch();

    function getData() {
        return (dispatch: any) => {
            axios
                .get(url)
                .then((res) => {
                    console.log(res);
                    const { image_url: url, title, import_datetime: importTime } = res.data.data;

                    dispatch({
                        type: 'FETCH_DATA',
                        payload: {
                            imageUrl: url,
                            title,
                            importDatetime: importTime
                        }
                    });

                    return res;
                })
                .catch(() => {
                    dispatch({
                        type: 'ERROR_FETCH_DATA'
                    });
                });
        };
    }

    function handleFetchdata() {
        dispatch(getData());
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Window}>
                <img src={content.image.imageUrl} alt="нихуя" />
            </div>
            <button onClick={() => handleFetchdata()} className={styles.Download}>
                Загрузить
            </button>
        </div>
    );
}

export default FetchingData;
