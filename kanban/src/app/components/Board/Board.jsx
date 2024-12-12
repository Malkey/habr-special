import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, changeStatus } from './../../redux/actions';
import { useDrop } from "react-dnd";
import Card from './../Card/Card';
import styles from './board.module.css';

const getId = () => {
    return new Date().getTime();
}

const Board = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state);
    const input = useRef();

    const [, dropInProgress] = useDrop({
        accept: 'CARD',
        drop: (item) => {
            dispatch(changeStatus({
                id: item.id,
                newStatus: 'in-progress',
            }));
        },
    });

    const [, dropUnderReview] = useDrop({
        accept: 'CARD',
        drop: (item) => {
            dispatch(changeStatus({
                id: item.id,
                newStatus: 'under-review',
            }));
        },
    });

    const [, dropCompleted] = useDrop({
        accept: 'CARD',
        drop: (item) => {
            dispatch(changeStatus({
                id: item.id,
                newStatus: 'completed',
            }));
        },
    });

    const handleFormSubmit = useCallback((e) => {
        e.preventDefault();
        const value = input.current.value.trim();

        if (value !== '') {
            dispatch(addCard({
                id: getId(),
                title: value,
                status: "in-progress"
            }));
        }

        e.target.reset();
    }, [dispatch]);
    
    return (
        <>
            <h1>Канбан-доска</h1>

            <div className={styles.board}>
                <div ref={dropInProgress} className={styles.column}>
                    <h2 className={styles.h2}>В работе</h2>
                    {cards.map(card => (
                        card.status === 'in-progress' && 
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                        />
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

                <div ref={dropUnderReview} className={styles.column}>
                    <h2 className={styles.h2}>На проверке</h2>
                    {cards.map(card => (
                        card.status === 'under-review' && 
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                        />
                    ))}
                </div>

                <div ref={dropCompleted} className={styles.column}>
                    <h2 className={styles.h2}>Завершено</h2>
                    {cards.map(card => (
                        card.status === 'completed' && 
                        <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Board;