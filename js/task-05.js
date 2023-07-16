const input = document.querySelector("#name-input");
const out = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  out.textContent = event.target.value;

  if (event.target.value === "") {
    output.textContent = "Anonymous";
  }
});
