import RatingFilter from './RatingFilter/RatingFilter';
import PlatformFilter from './PlatformFilter/PlatformFilter';

const Filters = () => {
    return (
        <div>
            <PlatformFilter />
            <RatingFilter />
        </div>
    );
};

export default Filters;