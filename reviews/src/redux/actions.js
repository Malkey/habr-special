const getData = () => ({
    type: 'GET_DATA',
});

const setFilters = ({ platforms, ratingRange }) => ({
    type: 'SET_FILTERS',
    payload: { platforms, ratingRange },
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