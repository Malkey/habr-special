import Card from './../Card/Card';
import styles from './board.module.css';

const Board = () => {

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