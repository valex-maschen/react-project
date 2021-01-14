import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import styles from './DownloadWindow.module.css';

const url = 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';

function FetchingData() {
    const content = useSelector((state) => state);
    const dispatch = useDispatch();

    function getData() {
        return (dispatch) => {
            axios.get(url).then((res) => {
                dispatch({
                    type: 'FETCH_DATA',
                    payload: res.data.data
                });
                return(res);
            }).catch(() => { 
                dispatch({
                type: 'ERROR_FETCH_DATA',
            })
            ;} );
        };
    }

    function onFetchdata() {
        dispatch(getData());
    }

    return (
        <div className={styles.Container}>
            <div className={styles.Window}>
                <img src={content.data.url} />
            </div>
            <button onClick={() => onFetchdata()} className={styles.Download}>
                Загрузить
            </button>
        </div>
    );
}

export default FetchingData;
