import React from 'react';
import styles from './Main.module.css';
import DownloadWindow from '../../Components/DownloadWindow/DownloadWindow';

const Main = () => {
    return (
        <div className={styles.Container}>
            <span className={styles.Main}> Главная </span>
            <DownloadWindow />
        </div>
    );
};

export default Main;
