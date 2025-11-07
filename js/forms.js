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

// cancel popup event
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

// summery
const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const phoneOutput = document.querySelector("#phone_output");
const genderOutput = document.querySelector("#gender_output");
const symptomsOutput = document.querySelector("#symptoms_output");
const commentOutput = document.querySelector("#comment_output");
// do selection + checkbox + textarea

function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");
  const email = formData.get("email");
  const phone = formData.get("phone_number");
  const gender = formData.get("gender");
  const symptoms = formData
    .getAll("symptoms")
    .map((symptom) => symptom.replace(/_/g, " "));
  const comment = formData.get("comment");

  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = email;
  phoneOutput.textContent = phone;
  genderOutput.textContent = gender;
  symptomsOutput.textContent = symptoms.join(", ");
  commentOutput.textContent = comment;
}

// running the funtions
form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
