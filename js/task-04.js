const counterValueElement = document.querySelector("#value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const updateCounter = () => {
  counterValueElement.textContent = counterValue;
};

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});

updateCounter();
