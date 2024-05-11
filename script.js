const inputField = document.querySelector("#date-input");
const btn = document.querySelector("#calculate-btn");

function calculateAge() {
  const input = inputField.value;

  const dob = new Date(input);
  const currentDate = new Date();

  const totalAge = currentDate - dob;
  console.log("AIMS : " + totalAge + " ms");

  const ageInSeconds = totalAge / 1000;
  console.log("AIS : " + ageInSeconds + " sec");

  const ageInMinutes = ageInSeconds / 60;
  console.log("AIM : " + ageInMinutes + " min");

  const ageInHours = ageInMinutes / 60;
  console.log("AIH : " + ageInHours + " hours");

  const ageInDays = ageInHours / 24;
  console.log("AID : " + ageInDays + " days");

  const ageInMonths = ageInDays / 30.44;
  console.log("AIMon : " + ageInMonths + " month");

  const ageInYears = ageInMonths / 12;
  console.log("AIY : " + ageInYears + " year");



  document.querySelector("#years").textContent = Math.floor(ageInYears);
  document.querySelector("#months").textContent = Math.floor(ageInMonths % 12);
  document.querySelector("#days").textContent = Math.floor(ageInDays % 30.44);

  document.querySelector("#hours").textContent = Math.floor(ageInHours % 24) + 5;
  document.querySelector("#minutes").textContent = Math.floor(ageInMinutes % 60);
  document.querySelector("#seconds").textContent = Math.floor(ageInSeconds % 60);

}




btn.addEventListener("click", function () {
  calculateAge();
});
