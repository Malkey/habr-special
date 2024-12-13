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

        if (gte >= 0 && lte >= 0) {
            dispatch(setFilters({
                ...filters,
                ratingRange: [ gte, lte ],
            }));
        }
    }, [filters, dispatch]);

    return (
        <div className='rating-filters'>
            <p>Фильтр по рейтингу</p>
            <form>
                <input 
                    type="number"
                    name="gte"
                    value={filters.ratingRange[0]}
                    placeholder="min"
                    ref={ratingFilterGte}
                    onChange={handleRatingFilter}
                    min='1'
                    max='5'
                />
                <input 
                    type="number"
                    name="lte"
                    value={filters.ratingRange[1]}
                    placeholder="max"
                    ref={ratingFilterLte}
                    onChange={handleRatingFilter}
                    min='1'
                    max='5'
                />
            </form>
        </div>
    );
};

export default RatingFilter;