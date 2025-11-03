console.log("loading instructions");

document.querySelector("#eyes").classList.add("hide");
document.querySelector("#teeth").classList.add("hide");
document.querySelector("#nails").classList.add("hide");

document.querySelector("#eyesbtn").addEventListener("click", eyesRed);
function eyesRed() {
  console.log("Eyes are now red");
  document.querySelector("#eyes").classList.remove("hide");
  document.querySelector("#teeth").classList.add("hide");
  document.querySelector("#nails").classList.add("hide");
  document.querySelector("#feature").textContent = "Red eyes";
  document.querySelector("#danger-level").textContent = "Danger level: 4";
  document.querySelector("#efficiency").textContent =
    "Commonly seen in real and fake humans, beware. If only this symptom is showing be cautious, but it is not definitive on its own. Recent intake of caffeine can impact test results.";
  document.querySelector("#requirement").innerHTML =
    "<strong>Natural Reasons</strong><ul><li>Lack of sleep</li><li>Dry air</li><li>Allergies</li><li>Contacts</li></ul>";
}

document.querySelector("#teethbtn").addEventListener("click", teethPerfect);
function teethPerfect() {
  console.log("Teeth are now perfect");
  document.querySelector("#teeth").classList.remove("hide");
  document.querySelector("#eyes").classList.add("hide");
  document.querySelector("#nails").classList.add("hide");
  document.querySelector("#feature").textContent = "Perfect teeth";
  document.querySelector("#danger-level").textContent = "Danger level: 6";
  document.querySelector("#efficiency").textContent =
    "Perfectly aligned white teeth. Humans tend to have slight yellow tinted teeth with crooked imperfections. Beware of recent dentist appointments. Recent smoking can impact test results.";
  document.querySelector("#requirement").innerHTML =
    "<strong>Natural Reasons</strong><ul><li>Recent dental appointment</li><li>Dentures</li><li>Past braces</li><li>No smoking</li></ul>";
}

document.querySelector("#nailsbtn").addEventListener("click", nailsDirty);
function nailsDirty() {
  console.log("Nails are now dirty");
  document.querySelector("#nails").classList.remove("hide");
  document.querySelector("#eyes").classList.add("hide");
  document.querySelector("#teeth").classList.add("hide");
  document.querySelector("#feature").textContent = "Dirty nails";
  document.querySelector("#danger-level").textContent = "Danger level: 7";
  document.querySelector("#efficiency").textContent =
    "Unkempt nails are a severe sign of a fake human; proceed with caution. Recent handwashing can impact the test results.";
  document.querySelector("#requirement").innerHTML =
    "<strong>Natural Reasons</strong><ul><li>Dirty work ex. gardening</li><li>Biting or picking nails</li><li>Longer nails</li><li>Sweaty hands</li></ul>";
}
