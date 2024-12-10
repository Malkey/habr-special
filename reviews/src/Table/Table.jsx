import { useSelector } from 'react-redux'

const Table = () => {
    const reviews = useSelector((state) => state.reviews);

    const reviewsRows = reviews.map(item => (
        <tr key={item.id}>
            <td>{item.platform}</td>
            <td>{item.rating}</td>
            <td>{item.date}</td>
            <td>{item.text}</td>
        </tr>
    ));
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Платформа</th>
                    <th>Рейтинг</th>
                    <th>Время</th>
                    <th>Отзывы</th>
                </tr>
            </thead>
            <tbody>
                {reviewsRows}
            </tbody>
        </table>
    );
}

export default Table;