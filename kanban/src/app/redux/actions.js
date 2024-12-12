const addCard = (newCard) => ({
    type: 'ADD_CARD',
    payload: newCard,
});

const changeStatus = ({ id, newStatus }) => ({
    type: 'CHANGE_STATUS',
    payload: { id, newStatus },
});

export {
    addCard,
    changeStatus,
}