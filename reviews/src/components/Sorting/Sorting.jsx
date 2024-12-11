import { useCallback } from 'react';
import { useDispatch } from 'react-redux'
import { sortData } from '../../redux/actions';
import './Sorting.css';

const Filters = () => {
    const dispatch = useDispatch();
    
    const handleChange = useCallback((e) => {
        dispatch(sortData({
            by: e.target.dataset.by,
            order: e.target.value,
        }));
    }, [dispatch]);

    return (
        <form className="sorting" onChange={handleChange}>
            <div>
                <p>Сортировать по дате</p>
                <label>
                    Сначала новые
                    <input
                        type="radio"
                        name="sort"
                        value="desc"
                        data-by="date"
                    />
                </label>
                <label>
                    Сначала старые
                    <input
                        type="radio"
                        name="sort"
                        value="asc"
                        data-by="date"
                    />
                </label>
            </div>

            <div>
                <p>Сортировать по оценке</p>
                <label>
                    По убыванию
                    <input
                        type="radio"
                        name="sort"
                        value="desc"
                        data-by="rating"
                    />
                </label>
                <label>
                    По возрастанию
                    <input
                        type="radio"
                        name="sort"
                        value="asc"
                        data-by="rating"
                    />
                </label>
            </div>
        </form>
    );
};

export default Filters;