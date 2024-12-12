import { useSelector } from "react-redux";
import Card from './../Card/Card';
import styles from './board.module.css';

const Board = () => {
    const cards = useSelector(state => state);
    console.log(cards);

    return (
        <>
            <h1>Моя канбан-доска</h1>
            <div className={styles.board}>
                <div className={styles.column}>
                    <h2>Колонка 1</h2>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className={styles.column}>
                    <h2>Колонка 1</h2>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className={styles.column}>
                    <h2>Колонка 1</h2>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    );
};

export default Board;