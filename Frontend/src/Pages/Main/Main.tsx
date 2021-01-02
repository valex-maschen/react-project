import React from 'react';
import styles from './Main.module.css';
import DownloadWindow from '../../Components/DownloadWindow/DownloadWindow';

const Main = () => (
    <div className={styles.Container}>
        <DownloadWindow />
    </div>
);

export default Main;
