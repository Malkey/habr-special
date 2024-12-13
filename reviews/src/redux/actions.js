export const getData = () => ({
    type: 'GET_DATA_REQUEST',
});

export const getDataSuccess = (data) => ({
    type: 'GET_DATA_SUCCESS',
    payload: data,
});

export const getDataFail = (message) => ({
    type: 'GET_DATA_FAIL',
    payload: message,
});

export const setFilters = ({ platforms, ratingRange }) => ({
    type: 'SET_FILTERS',
    payload: { platforms, ratingRange },
});

export const sortData = ({ by, order }) => ({
    type: 'SORT_DATA',
    payload: { by, order },
});