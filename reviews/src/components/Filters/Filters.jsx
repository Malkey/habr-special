import { useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setFilters, sortData } from '../../redux/actions';

const Filters = () => {
    const dispatch = useDispatch();
    const { filters, sort } = useSelector(state => state);

    const platformFilter = useRef();
    const ratingFilterGte = useRef();
    const ratingFilterLte = useRef();

    // функция сортировки:
    // dispatch(sortData({
    //     by: 'date',
    //     order: 'asc',
    // }));

    const handlePlatformFilter = useCallback(() => {
        console.log(platformFilter.current.value);
        dispatch(setFilters({
            ...filters,
            platform: platformFilter.current.value,
        }));
    }, []);

    const handleRatingFilter = useCallback(() => {
        const [ gte, lte ] = [ ratingFilterGte.current.value, ratingFilterLte.current.value ];
        // TODO: добавить проверку на отрицательное число
        dispatch(setFilters({
            ...filters,
            ratingRange: [ gte, lte ],
        }));
    }, []);

    return (
        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
            <p>Фильтр по платформе</p>
            <select onChange={handlePlatformFilter} ref={platformFilter}>
                <option name="google" value="Google">Google</option>
                <option name="yandex" value="Яндекс">Яндекс</option>
                <option name="2gis"   value="2ГИС">2ГИС</option>
            </select>

            <p>Рейтинг:</p>
            <input type="number" name="gte" value={filters.ratingRange[0]} placeholder="min" ref={ratingFilterGte} onChange={handleRatingFilter} />
            <input type="number" name="lte" value={filters.ratingRange[1]} placeholder="max" ref={ratingFilterLte} onChange={handleRatingFilter} />

            {/* <div>
                <p>Сортировка:</p>
                <label>
                    Сначала новые
                    <input type="radio" name="time" value="asc" />
                </label>
                <label>
                    Сначала старые
                    <input type="radio" name="time" value="desc" />
                </label>
            </div>

            <div>
                <label>
                    По возрастанию
                    <input type="radio" name="rating" value="asc" />
                </label>
                <label>
                    По убыванию
                    <input type="radio" name="rating" value="desc" />
                </label>
            </div> */}
        </div>
    );
};

export default Filters;