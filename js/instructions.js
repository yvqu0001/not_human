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
}

document.querySelector("#teethbtn").addEventListener("click", teethPerfect);
function teethPerfect() {
  console.log("Teeth are now perfect");
  document.querySelector("#teeth").classList.remove("hide");
  document.querySelector("#eyes").classList.add("hide");
  document.querySelector("#nails").classList.add("hide");
}

document.querySelector("#nailsbtn").addEventListener("click", nailsDirty);
function nailsDirty() {
  console.log("Nails are now dirty");
  document.querySelector("#nails").classList.remove("hide");
  document.querySelector("#eyes").classList.add("hide");
  document.querySelector("#teeth").classList.add("hide");
}
