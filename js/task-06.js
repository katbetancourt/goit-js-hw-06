const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const inputValue = validationInput.value;
  const expectedLength = parseInt(validationInput.getAttribute("data-length"));

  if (inputValue.length === expectedLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
