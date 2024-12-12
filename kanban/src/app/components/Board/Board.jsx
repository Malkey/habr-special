import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from './../../redux/actions';
import Card from './../Card/Card';
import styles from './board.module.css';

const getId = () => {
    return new Date().getTime();
}

const Board = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state);
    const input = useRef();

    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();
        
        dispatch(addCard({
            id: getId(),
            title: input.current.value.trim(),
            status: "in-progress"
        }));
    }, [dispatch]);
    
    return (
        <>
            <h1>Канбан-доска</h1>
            <div className={styles.board}>
                <div className={styles.column}>
                    <h2>В работе</h2>
                    {cards.map(card => (
                        card.status === 'in-progress' && <Card key={card.id} title={card.title} />
                    ))}
                    <form onSubmit={handleFormSubmit}>
                        <input 
                            type="text"
                            className={styles.input}
                            placeholder="Добавить задачу"
                            ref={input}
                        />
                    </form>
                </div>
                <div className={styles.column}>
                    <h2>На проверке</h2>
                    {cards.map(card => (
                        card.status === 'under-review' && <Card key={card.id} title={card.title} />
                    ))}
                </div>
                <div className={styles.column}>
                    <h2>Завершено</h2>
                    {cards.map(card => (
                        card.status === 'completed' && <Card key={card.id} title={card.title} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Board;