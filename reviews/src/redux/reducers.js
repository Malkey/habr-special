const initialState = {
    reviews: [
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
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_BY_PLATFORM':
            const platform = action.payload;
            return {...state, reviews: state.reviews.filter((item) => item.platform === platform)};
        case 'FILTER_BY_RATING':
            const { gte, lte } = action.payload;
            return state.reviews.filter(({ rating }) => (rating >= gte && rating <= lte));
        case 'SORT_DATA':
            const { sortKey, isAsc } = action.payload;
            // TODO: дописать функцию сортировки
            return state.reviews.sort();
        default:
            return state;
    }
};