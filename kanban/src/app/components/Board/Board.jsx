import Column from "../Column/Column";
import styles from './board.module.css';

const Board = () => {   
    return (
        <>
            <h1>Канбан-доска</h1>
            <div className={styles.board}>
                <Column name="in-progress" />
                <Column name="under-review" />
                <Column name="completed" />
            </div>
        </>
    );
};

export default Board;