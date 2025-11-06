const form = document.querySelector("form");
const symptomInputs = document.querySelectorAll('input[name="symptoms"]');
const errorMessage = document.querySelector("#symptom-error");

form.addEventListener("submit", (e) => {
  const oneChecked = [...symptomInputs].some((input) => input.checked);

  if (!oneChecked) {
    e.preventDefault();
    errorMessage.hidden = false;
  } else {
    errorMessage.hidden = true;
  }
});
