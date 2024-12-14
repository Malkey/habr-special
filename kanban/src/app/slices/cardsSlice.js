import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Документ 1", status: "in-progress" },
    { id: "2", title: "Документ 2", status: "in-progress" },
    { id: "3", title: "Документ 3", status: "under-review" },
    { id: "4", title: "Документ 4", status: "completed" },
];

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.push(action.payload);
        },
        changeStatus: (state, action) => {
            const { id, newStatus } = action.payload;

            const card = state.find(card => card.id === id);
            const cardIndex = state.findIndex(card => card.id === id);

            card.status = newStatus;

            state.splice(cardIndex, 1);
            state.push(card);
        },
    },
});

export const { addCard, changeStatus } = cardsSlice.actions;

export default cardsSlice.reducer;