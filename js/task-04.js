let counterValue = 0;

const counter = document.querySelector(`#value`);
const btnM = document.querySelector('button[data-action="decrement"]');
const btnP = document.querySelector('button[data-action="increment"]');

btnM.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});

btnP.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});
