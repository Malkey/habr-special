const initialState = [
    { id: "1", title: "Документ 1", status: "in-progress" },
    { id: "2", title: "Документ 2", status: "in-progress" },
    { id: "3", title: "Документ 3", status: "under-review" },
    { id: "4", title: "Документ 4", status: "completed" },
];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARD': {
            return [...state, action.payload];
        }
        case 'CHANGE_STATUS': {
            const { cardId, cardStatus } = action.payload;
            return state.map((card) => (
                card.id === cardId 
                    ? { ...card, status: cardStatus } 
                    : card
            ));
        }
        default:
            return state;
    }
};