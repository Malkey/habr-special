import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../redux/actions';
import './Table.css';

const Table = () => {
    const dispatch = useDispatch();
    const { visibleData, loading, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    const rows = visibleData.map(item => (
        <tr key={item.id}>
            <td>{item.platform}</td>
            <td>{item.rating}</td>
            <td>{new Date(item.date).toLocaleDateString('ru-RU')}</td>
            <td>{item.text}</td>
        </tr>
    ));
    
    return (
        loading
            ?   <p>Данные загружаются</p>
            :   error
                ?   <p>При загрузке данных произошла ошибка: {error}</p>
                :   <table>
                        <thead>
                            <tr>
                                <th>Платформа</th>
                                <th>Рейтинг</th>
                                <th>Время добавления</th>
                                <th>Текст отзыва</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
    );
};

export default Table;