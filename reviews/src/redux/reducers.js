import { sortData } from "./../utils/sortData";

const initialState = {
    data: [],
    filteredData: [],
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
            const data = action.payload;
            const { by, order } = state.sort;
            const sortedData = sortData(data, by, order);

            return {
                ...state,
                data,
                loading: false,
                filteredData: sortedData,
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
                filteredData: state.data.filter(item =>
                    (platforms.length ? platforms.includes(item.platform) : true) &&
                    (item.rating >= ratingRange[0] && item.rating <= ratingRange[1])
                ),
            };
        }
        case 'SORT_DATA': {
            const { by, order } = action.payload;
            const sortedData = sortData(state.filteredData, by, order);
            return {
                ...state,
                filteredData: sortedData,
                sort: { by, order },
            };
        }
        default:
            return state;
    }
};

export default reducer;