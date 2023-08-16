const calculateButton = document.getElementById("calculate");
const birthdateInput = document.getElementById("birthdate");
const yearsOutput = document.getElementById("years");
const weeksOutput = document.getElementById("weeks");
const daysOutput = document.getElementById("days");
const minutesOutput = document.getElementById("minutes");
const secondsOutput = document.getElementById("seconds");

calculateButton.addEventListener("click", () => {
    const birthdate = new Date(birthdateInput.value);
    const now = new Date();

    const ageInSeconds = Math.floor((now - birthdate) / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInYears = Math.floor(ageInDays / 365);

    yearsOutput.textContent = `${ageInYears} лет`;
    weeksOutput.textContent = `${ageInWeeks} недель`;
    daysOutput.textContent = `${ageInDays} дней`;
    minutesOutput.textContent = `${ageInMinutes} минут`;
    secondsOutput.textContent = `${ageInSeconds} секунд`;
});
