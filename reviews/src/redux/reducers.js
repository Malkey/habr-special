import { sortData } from "./../utils/sortData";

const initialState = {
    data: [],
    visibleData: [],
    loading: false,
    error: null,
    filters: {
        platforms: [],
        ratingRange: [1, 5],
    },
    sort: {
        by: 'date',
        order: 'desc',
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_REQUEST': {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case 'GET_DATA_SUCCESS': {
            const { by, order } = state.sort;
            const sortedData = sortData(action.payload, by, order);

            return {
                ...state,
                loading: false,
                data: sortedData,
                visibleData: sortedData,
            };   
        }
        case 'GET_DATA_FAIL': {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case 'SET_FILTERS': {
            const { platforms, ratingRange } = action.payload;
            return {
                ...state,
                filters: { platforms, ratingRange },
                visibleData: state.data.filter(item =>
                    (platforms.length ? platforms.includes(item.platform) : true) &&
                    (item.rating >= ratingRange[0] && item.rating <= ratingRange[1])
                ),
            };
        }
        case 'SORT_DATA': {
            const { by, order } = action.payload;
            const sortedData = sortData(state.data, by, order);
            const sortedVisibleData = sortData(state.visibleData, by, order);
            return {
                ...state,
                data: sortedData,
                visibleData: sortedVisibleData,
                sort: { by, order },
            };
        }
        default:
            return state;
    }
};

export default reducer;