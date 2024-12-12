import Timer from "./timer";

export default class App {
  constructor() {
    this.submit = document.querySelector(".timer__form");
    this.timerArea = document.querySelector(".timer__area");
    this.onSubmit = this.onSubmit.bind(this);
  }

  init() {
    console.log('init');
    this.submit.addEventListener("submit", (e) => this.onSubmit(e));
  }

  onSubmit(e) {
    e.preventDefault();
    const seconds = Number(e.target.elements[0].value);
    const timer = new Timer(seconds);
    this.timerArea.appendChild(timer.generate());
  }
}