const buttotIncrementEl = document.querySelector(
  'button[data-action="increment"]',
);
const buttonDecrementEl = document.querySelector(
  'button[data-action=decrement',
);
const totalValueCounter = document.querySelector('#value');

const counter = {
  value: 0,
  decrement() {
    this.value -= 1;
    totalValueCounter.textContent = this.value;
    // console.log(totalValueCounter.textContent);
  },
  increment() {
    this.value += 1;
    totalValueCounter.textContent = this.value;
    // console.log(totalValueCounter.textContent);
  },
};

buttotIncrementEl.addEventListener('click', function () {
  counter.increment();
});

buttonDecrementEl.addEventListener('click', function () {
  counter.decrement();
});
