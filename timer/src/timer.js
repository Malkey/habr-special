const createElements = () => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');

  li.append(span, btn);
  
  return { li, span, btn };
};

const renderTimer = (elements, timer, time) => {
  const { li, span, btn } = elements;

  span.innerHTML = `Осталось ${time} секунд`;
  btn.innerHTML = '&times;';

  btn.addEventListener('click', () => {
    removeTimer(elements, timer);
  });

  return li;
};

const removeTimer = (elements, timer) => {
  clearInterval(timer);
  elements.li.remove();
};

const createTimer = (time) => {
  const elements = createElements();

  const timer = setInterval(() => {
    time -= 1;
    if (time > 0) {
      renderTimer(elements, timer, time);
    } else {
      removeTimer(elements, timer);
    }
  }, 1000);

  const item = renderTimer(elements, timer, time);

  return item;
};

export default createTimer;