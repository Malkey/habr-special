const addCard = (newCard) => ({
    type: 'ADD_CARD',
    payload: newCard,
});

const changeStatus = () => ({
    type: 'CHANGE_STATUS',
});

export {
    addCard,
    changeStatus,
}