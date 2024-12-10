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
        platform: '',
        raringRange: [1, 5],
    },
    sort: {
        by: 'rating',
        order: 'asc',
    },
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            // временное решение — просто кладу data в filteredData
            return {
                ...state,
                filteredData: state.data,
            }
        case 'SET_FILTERS':
            const { platform, ratingRange } = action.payload;
            return {
                ...state,
                filters: { platform, ratingRange },
                filteredData: state.data.filter(item => 
                    (platform ? item.platform === platform : true) &&
                    (item.rating >= ratingRange[0] && item.rating <= ratingRange[1])
                ),
            };
        case 'SORT_DATA':
            const { by, order } = action.payload;
            const sortedData = [...state.filteredData].sort((a, b) => {
                switch (by) {
                    case 'rating':
                        return order === 'asc' ? a.rating - b.rating : b.rating - a.rating ;
                    case 'date':
                        return  order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
                    default:
                        return 0;
                }
            });
            return {
                ...state,
                filteredData: sortedData,
                sort: { by, order },
            };
        default:
            return state;
    }
};