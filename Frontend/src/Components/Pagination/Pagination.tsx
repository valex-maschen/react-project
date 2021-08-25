import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../Store/reducer/Reducer';
import styles from './Pagination.module.css';

const COUNT = 3;

interface Prors extends React.HtmlHTMLAttributes<HTMLDivElement> {
    active: number;
    btnClick: (num: number) => void;
}

const Pagination: React.FC<Prors> = ({ active, btnClick, ...props }) => {
    const historyImages = useSelector((state: State) => state.historyImg.length);

    const pagesCount = Math.ceil(historyImages / COUNT);

    const items = (() => {
        const arr = [];

        for (let i = 0; i < pagesCount; i++) {
            arr.push(
                <button
                    onClick={() => btnClick(i)}
                    key={i}
                    type="button"
                    disabled={i === active}
                    className={styles.Page}>
                    {i + 1}
                </button>
            );
        }
        return arr;
    })();

    return (
        <div className={styles.Container} {...props}>
            {items}
        </div>
    );
};

export default Pagination;
