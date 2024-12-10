const filterByPlatform = (platform) => ({
    type: 'FILTER_BY_PLATFORM',
    payload: platform,
});

const filterByRating = ({ gte, lte }) => ({
    type: 'FILTER_BY_RATING',
    payload: { gte, lte },
});

const sortData = ({ sortKey, isAsc }) => ({
    type: 'SORT_DATA',
    payload: { sortKey, isAsc },
});

export {
    filterByPlatform,
    filterByRating,
    sortData,
}