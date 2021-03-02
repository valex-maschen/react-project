import React from 'react';
import { useSelector } from 'react-redux';
import styles from './History.module.css';
import { State } from '../../Store/reducer/Reducer';

const History = () => {
    const historyImage = useSelector((state: State) => state.historyImg);

    return (
        <div className={styles.Container}>
            <h1 className={styles.Header}> История </h1>
            <div className={styles.Window}>
                <ul>
                    {/*  добавить индекс для пагинации */}
                    {historyImage.map((item) => {
                        return (
                            <li key={item.importDatetime}>
                                <img src={item.imageUrl} />
                                <strong>{item.title}</strong>
                                <small>{item.importDatetime}</small>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default History;
