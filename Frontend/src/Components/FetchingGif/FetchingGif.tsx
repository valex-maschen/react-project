import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './FetchingGif.module.css';
import fetchGif from '../../Store/actions/getImage';
import { State } from '../../Store/reducer/Reducer';

function FetchingGif() {
    const image = useSelector((state: State) => state.image);
    const dispatch = useDispatch();

    const handleFetchGif = () => {
        dispatch(fetchGif());
    };

    useEffect(() => {
        handleFetchGif();
    }, []);

    return (
        <div className={styles.Container}>
            <div className={styles.Window}>
                <img className={styles.Image} src={image.imageUrl} alt="nope (づ ◕‿◕ )づ" />
            </div>
            <button onClick={handleFetchGif} className={styles.Download}>
                Загрузить
            </button>
        </div>
    );
}

export default FetchingGif;
