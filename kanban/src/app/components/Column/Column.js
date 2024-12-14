import { useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, changeStatus } from '../../slices/cardsSlice';
import { useDrop } from 'react-dnd';
import { useTranslation } from "react-i18next";
import Card from "../Card/Card";
import styles from './column.module.css';

const getId = () => {
    return new Date().getTime();
}

const Column = ({ name }) => {
    const cards = useSelector(state => state.cards);
    const dispatch = useDispatch();
    const input = useRef();
    const { t } = useTranslation();

    const [, dropRef] = useDrop({
        accept: 'CARD',
        drop: (item) => {
            dispatch(changeStatus({
                id: item.id,
                newStatus: name,
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
        <div ref={dropRef} className={styles.column}>
            <h2 className={styles.h2}>
                {t(`columns.${name}`)}
            </h2>

            {cards.map(card => (
                card.status === name && 
                <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                />
            ))}

            {name === 'in-progress' &&
                <form onSubmit={handleFormSubmit}>
                    <input 
                        type="text"
                        className={styles.input}
                        placeholder="Добавить задачу"
                        ref={input}
                    />
                </form>
            }
        </div>
    );
}

export default Column;