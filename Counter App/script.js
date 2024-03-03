const count = document.querySelector(".count");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const input = document.querySelector("#userInput");
const resetBtn = document.querySelector(".reset");

plusBtn.addEventListener("click", () => {
  const countValue = parseInt(count.innerHTML);
  const inputValue = parseInt(input.value);
  count.innerHTML = countValue + inputValue;
});

minusBtn.addEventListener("click", () => {
  const countValue = parseInt(count.innerHTML);
  const inputValue = parseInt(input.value);
  count.innerHTML = countValue - inputValue;
});

resetBtn.addEventListener("click", () => {
  count.innerHTML = 0;
});
