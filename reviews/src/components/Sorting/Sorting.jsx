import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { sortData } from '../../redux/actions';
import './Sorting.css';

const Filters = () => {
    const dispatch = useDispatch();
    const { by, order } = useSelector(state => state.sort);
    
    const handleChange = useCallback((e) => {
        dispatch(sortData({
            by: e.target.dataset.by,
            order: e.target.dataset.order,
        }));
    }, [dispatch]);

    const isChecked = useCallback((checkboxBy, checkboxOrder) => {
        return by === checkboxBy && order === checkboxOrder;
    }, [by, order]);

    return (
        <form className="sorting">
            <div>
                <p>Сортировать по дате</p>
                <label>
                    Сначала новые
                    <input
                        type="radio"
                        className='visually-hidden'
                        name="sort"
                        data-by="date"
                        data-order="desc"
                        onChange={handleChange}
                        checked={isChecked('date', 'desc')}
                    />
                </label>
                <label>
                    Сначала старые
                    <input
                        type="radio"
                        className='visually-hidden'
                        name="sort"
                        data-by="date"
                        data-order="asc"
                        onChange={handleChange}
                        checked={isChecked('date', 'asc')}
                    />
                </label>
            </div>

            <div>
                <p>Сортировать по оценке</p>
                <label>
                    По убыванию
                    <input
                        type="radio"
                        className='visually-hidden'
                        name="sort"
                        data-by="rating"
                        data-order="desc"
                        onChange={handleChange}
                        checked={isChecked('rating', 'desc')}
                    />
                </label>
                <label>
                    По возрастанию
                    <input
                        type="radio"
                        className='visually-hidden'
                        name="sort"
                        data-by="rating"
                        data-order="asc"
                        onChange={handleChange}
                        checked={isChecked('rating', 'asc')}
                    />
                </label>
            </div>
        </form>
    );
};

export default Filters;