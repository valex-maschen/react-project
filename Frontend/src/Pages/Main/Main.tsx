import React from 'react';
import styles from './Main.module.css';
import FetchingData from '../../Components/DownloadWindow/FetchingData';

const Main = () => {
    return (
        <div className={styles.Container}>
            <h1 className={styles.Main}> Главная </h1>
            <FetchingData />
        </div>
    );
};

export default Main;
