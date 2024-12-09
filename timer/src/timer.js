export default (container, time) => {
  const li = document.createElement('li');

  li.innerHTML = `Осталось ${time} секунд`;
  container.append(li);

  const timer = setInterval(() => {
    if (time > 0) {
      time -= 1;
      li.innerHTML = `Осталось ${time} секунд`;
    } else {
      clearInterval(timer);
      li.remove();
    }
  }, 1000);
  
}
