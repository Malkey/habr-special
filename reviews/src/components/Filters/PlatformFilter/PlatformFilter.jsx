import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../../../redux/actions';
import './PlatformFilter.css'

const PlatformFilter = () => {
    const dispatch = useDispatch();
    const { filters } = useSelector(state => state);

    const platformCheckbox1 = useRef();
    const platformCheckbox2 = useRef();
    const platformCheckbox3 = useRef();

    const handlePlatformFilter = useCallback(() => {
        const [checkbox1, checkbox2, checkbox3] = [
            platformCheckbox1.current,
            platformCheckbox2.current,
            platformCheckbox3.current,
        ];

        const checked = [
            checkbox1.checked && checkbox1.value,
            checkbox2.checked && checkbox2.value,
            checkbox3.checked && checkbox3.value,
        ].filter(item => !!item);
        
        dispatch(setFilters({
            ...filters,
            platforms: checked,
        }));
    }, [filters, dispatch]);

    return (
        <div className="platform-filter">
            <p>Фильтр по платформе</p>

            <form onChange={handlePlatformFilter}>
                <label>
                    <input
                        type="checkbox"
                        value="Google"
                        ref={platformCheckbox1}
                    />
                    Google
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="Яндекс"
                        ref={platformCheckbox2}
                    />
                    Яндекс
                </label>
                <label>
                    <input
                        type="checkbox"
                        value="2ГИС"
                        ref={platformCheckbox3}
                    />
                    2ГИС
                </label>
            </form>
        </div>
    );
};

export default PlatformFilter;