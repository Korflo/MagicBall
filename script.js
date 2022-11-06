const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answersArr = [
  "Tak!",
  "Nie.",
  "Może.",
  "Ciężko powiedzieć.",
  "Nie chce znać odpowiedzi na to pytanie...",
  "To zależy od Ciebie :)",
];

const shakeBall = () => {
  ball.classList.add("shake-animation");
  setTimeout(checkInput, 1000);
};

const checkInput = () => {
  if (input.value !== "" && input.value.slice(-1) === "?") {
    generateAnswer();
    error.textContent = "";
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = 'Pyatnie musi być zakończone znakiem "?".';
    answer.textContent = "";
  } else {
    error.textContent = "Musisz zadać jakieś pytanie!";
    answer.textContent = "";
  }
  ball.classList.remove("shake-animation");
};

const generateAnswer = () => {
  const number = Math.floor(Math.random() * 5);
  answer.innerHTML = `<span>Odpowiedz:</span> ${answersArr[number]}`;
};

ball.addEventListener("click", shakeBall);
