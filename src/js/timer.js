export default class Timer {
  constructor(seconds) {
    this.value = seconds;
    this.element = null;
    this.closeBtn = null;
  }

  generate() {
    console.log(this.value);
    const timerElement = document.createElement("li");
    timerElement.className = "timer__item";
    timerElement.innerHTML = `
      <p class="count">0:${this.value}</p>
      <button type="button" class="close">&#x2716;</button>
    `;
    this.element = timerElement;
    this.closeBtn = timerElement.querySelector(".close");
    this.closeBtn.addEventListener("click", (e) => this.close(e));
    return timerElement;
  }

  

  close(e) {
    e.target.parentElement.closest(".timer__area").removeChild(this.element);
  }
}