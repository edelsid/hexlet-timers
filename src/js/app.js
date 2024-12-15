export default class App {
  constructor() {
    this.submit = document.querySelector('.timer__form');
    this.timerArea = document.querySelector('.timer__area');
    this.onSubmit = this.onSubmit.bind(this);
  }

  init() {
    this.submit.addEventListener('submit', (e) => this.onSubmit(e));
  }

  onSubmit(e) {
    e.preventDefault();
    const seconds = Number(e.target.elements[0].value);
    const newTimer = this.generate(seconds);
    this.timerArea.appendChild(newTimer);
  }

  generate(seconds) {
    const timer = document.createElement('li');
    timer.className = 'timer__item';
    timer.innerHTML = `
      <p class="count">${seconds}</p>
      <button type="button" class="close">&#x2716;</button>
    `;
    const newCount = this.setTimer(timer, seconds);
    timer.querySelector('.close').addEventListener('click', () => App.close(timer, newCount));
    return timer;
  }

  setTimer(el, seconds) {
    const countArea = el.querySelector('.count');
    const count = setInterval(() => {
      seconds -= 1;
      countArea.innerText = `${seconds}`;
      if (seconds < 0) {
        App.close(el, count);
      }
    }, 1000);
    return count;
  }

  static close(el, count) {
    clearInterval(count);
    el.parentElement.closest('.timer__area').removeChild(el);
  }
}
