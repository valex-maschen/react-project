import React from 'react';
import styles from './Main.module.css';
import FetchingGif from '../../Components/FetchingGif/FetchingGif';

const Main = () => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Main}> Главная </h1>
            <FetchingGif />
        </div>
    );
};

export default Main;
