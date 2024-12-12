import { useDrag } from 'react-dnd';
import styles from './card.module.css';

const Card = ({ id, title }) => {
    const [{ opacity }, dragRef] = useDrag({
        type: 'CARD',
        item: { id },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    });

    return (
        <div
            ref={dragRef}
            className={styles.card}
            style={{ opacity }}
        >
            {title}
        </div>
    );
};

export default Card;