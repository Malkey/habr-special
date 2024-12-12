const addCard = (newCard) => ({
    type: 'ADD_CARD',
    payload: newCard,
});

const changeStatus = ({ cardId, cardStatus }) => ({
    type: 'CHANGE_STATUS',
    payload: { cardId, cardStatus }
});

export {
    addCard,
    changeStatus,
}