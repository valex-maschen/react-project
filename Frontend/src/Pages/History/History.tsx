import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './History.module.css';
import { State } from '../../Store/reducer/Reducer';
import Pagination from '../../Components/Pagination/Pagination';

const History = () => {
    const historyImage = useSelector((state: State) => state.historyImg);

    const [activePage, setActivePage] = useState<number>(0);

    return (
        <div className={styles.Container}>
            <h1 className={styles.Header}> История </h1>
            <div className={styles.Window}>
                <ul>
                    {/*  добавить индекс для пагинации */}
                    {historyImage.slice(activePage * 3, activePage * 3 + 3).map((item) => {
                        return (
                            <li className={styles.Item} key={item.importDatetime}>
                                <img className={styles.Image} src={item.imageUrl} alt="hui" />
                                <strong className={styles.Title}>{item.title}</strong>
                                <small className={styles.Date}>{item.importDatetime}</small>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Pagination
                active={activePage}
                btnClick={(num) => {
                    setActivePage(num);
                }}
            />
        </div>
    );
};

export default History;
