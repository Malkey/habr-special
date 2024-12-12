import { useDrag } from 'react-dnd';
import styles from './card.module.css';

const Card = ({ id, title }) => {
    const [{ opacity }, dragRef] = useDrag({
        type: 'CARD',
        item: { id },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
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