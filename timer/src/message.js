const addMessage = (container) => {
  container.innerHTML = 'Введите целое число больше нуля';
};

const removeMessage = (container) => {
  container.innerHTML = '';
}

export {addMessage, removeMessage};