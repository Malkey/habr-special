import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../../../redux/actions';
import './RatingFilter.css';

const RatingFilter = () => {
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state);

    const ratingFilterGte = useRef();
    const ratingFilterLte = useRef();

    const handleRatingFilter = useCallback(() => {
        const [ gte, lte ] = [ 
            ratingFilterGte.current.value, 
            ratingFilterLte.current.value,
        ];

        // TODO: добавить проверку на отрицательное число
        dispatch(setFilters({
            ...filters,
            ratingRange: [ gte, lte ],
        }));
    }, [filters, dispatch]);

    return (
        <div className='rating-filters'>
            <p>Рейтинг</p>
            <div>
                <input 
                    type="number"
                    name="gte"
                    value={filters.ratingRange[0]}
                    placeholder="min"
                    ref={ratingFilterGte}
                    onChange={handleRatingFilter}
                />
                <input 
                    type="number"
                    name="lte"
                    value={filters.ratingRange[1]}
                    placeholder="max"
                    ref={ratingFilterLte}
                    onChange={handleRatingFilter}
                />
            </div>
        </div>
    );
};

export default RatingFilter;