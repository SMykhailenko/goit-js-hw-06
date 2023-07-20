const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  const length = Number(textInput.getAttribute("data-length"));
  if (event.target.value.length === length) {
    updateClassElement("valid", "invalid");
  } else {
    updateClassElement("invalid", "valid");
  }
});

function updateClassElement(a, b) {
  textInput.classList.add(a);
  textInput.classList.remove(b);
}
