import './style.css';
import createTimer from './timer.js';
import { addMessage, removeMessage} from './message.js';

const render = (app) => {
  app.innerHTML = `
    <form>
      <label for="time-input">
        <p>Введите время в секундах</p>
        <input type="number" id="time-input">
      </label>
      <button type="submit" id="add-timer">Запустить таймер</button>
    </form>
    <div id="message"></div>
    <ul id="timers">
      <!-- Таймеры будут добавляться сюда -->
    </ul>
  `;

  const form = document.querySelector('form');
  const input = form.querySelector('input');
  const message = document.querySelector('#message');
  const container = document.querySelector('#timers');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const time = input.value;
    
    form.reset();
    input.focus();

    if (time && time > 0) {
      removeMessage(message);
      createTimer(container, time);
    } else {
      addMessage(message);
    };
  });

};

render(document.querySelector('#app'));
