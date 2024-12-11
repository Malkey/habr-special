import { sortData } from "./../utils/sortData";

const initialState = {
    data: [
        {
            id: 1,
            platform: "Google",
            rating: 4,
            date: "2023-11-15T10:00:00Z",
            text: "Отличный сервис!",
        },
        {
            id: 2,
            platform: "Яндекс",
            rating: 3,
            date: "2023-11-14T09:00:00Z",
            text: "Хорошо, но есть недочеты.",
        },
        {
            id: 3,
            platform: "2ГИС",
            rating: 5,
            date: "2023-11-13T08:00:00Z",
            text: "Прекрасно!",
        },
    ],
    filteredData: [],
    filters: {
        platforms: [],
        ratingRange: [1, 10],
    },
    sort: {
        by: 'date',
        order: 'desc',
    },
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA': {
            const { data } = state;
            const { by, order } = state.sort;
            const sortedData = sortData(data, by, order);
            return {
                ...state,
                filteredData: sortedData,
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