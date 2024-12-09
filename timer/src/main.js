import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <form>
    <label for="time-input">
      <p>Введите время в секундах</p>
      <input type="number" id="time-input">
    </label>
    <button id="add-timer">Добавить таймер</button>
  </form>
  <ul id="timers">
    <!-- Таймеры будут добавляться сюда -->
  </ul>
`
// setupCounter(document.querySelector('#counter'))
