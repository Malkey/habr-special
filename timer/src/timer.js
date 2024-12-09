const createTimer = (container, time) => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const btn = document.createElement('button');

  span.innerHTML = `Осталось ${time} секунд`;
  btn.innerHTML = '&times;';

  li.append(span, btn);
  container.append(li);

  const timer = setInterval(() => {
    if (time > 0) {
      time -= 1;
      span.innerHTML = `Осталось ${time} секунд`;
    } else {
      removeTimer();
    }
  }, 1000);

  const removeTimer = () => {
    clearInterval(timer);
    li.remove();
  };

  btn.addEventListener('click', () => {
    removeTimer();
  });
};

export default createTimer;