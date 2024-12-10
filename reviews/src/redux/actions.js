const getData = () => ({
    type: 'GET_DATA',
});

const setFilters = ({ platform, ratingRange }) => ({
    type: 'SET_FILTERS',
    payload: { platform, ratingRange },
});

const sortData = ({ by, order }) => ({
    type: 'SORT_DATA',
    payload: { by, order },
});

export {
    getData,
    setFilters,
    sortData,
}