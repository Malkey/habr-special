import { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { sortData } from '../../redux/actions';
import './Sorting.css';

const Filters = () => {
    const dispatch = useDispatch();
    
    const handleChange = useCallback((e) => {
        dispatch(sortData({
            by: e.target.name,
            order: e.target.value,
        }));
    }, [dispatch]);

    return (
        <div className="sorting">
            <div>
                <p>Сортировать по дате</p>
                <label>
                    Сначала новые
                    <input type="radio" name="date" value="desc" onChange={handleChange} />
                </label>
                <label>
                    Сначала старые
                    <input type="radio" name="date" value="asc" onChange={handleChange} />
                </label>
            </div>

            <div>
                <p>Сортировать по оценке</p>
                <label>
                    По убыванию
                    <input type="radio" name="rating" value="desc" onChange={handleChange} />
                </label>
                <label>
                    По возрастанию
                    <input type="radio" name="rating" value="asc" onChange={handleChange} />
                </label>
            </div>
        </div>
    );
};

export default Filters;