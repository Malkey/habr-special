import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getData, setFilters, sortData } from '../redux/actions';

const Table = () => {
    const dispatch = useDispatch();
    const { filteredData } = useSelector((state) => state);

    useEffect(() => {
        dispatch(getData());

        // TODO: перенести в компонент фильтра

        // dispatch(setFilters({
        //     platform: '2ГИС',
        //     ratingRange: [4, 10],
        // }));

        // TODO: перенести в кнопки сортировки

        // dispatch(sortData({
        //     by: 'date',
        //     order: 'asc',
        // }));
    }, []);

    const rows = filteredData.map(item => (
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
                {rows}
            </tbody>
        </table>
    );
}

export default Table;