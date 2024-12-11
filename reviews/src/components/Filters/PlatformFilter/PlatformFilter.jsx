import { useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../../../redux/actions';

const PlatformFilter = () => {
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state);

    const platformFilter = useRef();

    const handlePlatformFilter = useCallback(() => {
        console.log(platformFilter.current.value);
        dispatch(setFilters({
            ...filters,
            platform: platformFilter.current.value,
        }));
    }, []);

    return (
        <>
            <p>Фильтр по платформе</p>
            <select onChange={handlePlatformFilter} ref={platformFilter}>
                <option name="google" value="Google">Google</option>
                <option name="yandex" value="Яндекс">Яндекс</option>
                <option name="2gis"   value="2ГИС">2ГИС</option>
            </select>
        </>
    );
};

export default PlatformFilter;