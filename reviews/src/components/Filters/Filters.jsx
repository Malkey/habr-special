import RatingFilter from './RatingFilter/RatingFilter';
import PlatformFilter from './PlatformFilter/PlatformFilter';

const Filters = () => {
    return (
        <div style={{ textAlign: 'left', marginBottom: '30px' }}>
            <PlatformFilter />
            <RatingFilter />
        </div>
    );
};

export default Filters;