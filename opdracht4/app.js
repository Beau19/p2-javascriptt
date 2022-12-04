const mainMenu = document.querySelector(".main-menu");
const clickableArea = document.querySelector(".clickable-area");
const message = document.querySelector(".clickable-area .message");

let timer;
let GreenDisplayed;
let TimeNow;
let waitingForStart

const init = () => {
  greenDisplayed = false;
  waitingForStart = false;
};

init();

const setGreenColor = () => {
    clickableArea.style.backgroundColor = "#32cd32"
    message.innerHTML = "Klik nu!"
    message.style.color = "#111";
    greenDisplayed = true;
    timeNow = Date.now();
};

const startGame = () => {
    clickableArea.style.backgroundColor = "#c1121f";
    message.innerHTML = "Wacht op de Groene Kleur!";
    message.style.color = "#fff";

    let randomNumber = Math.floor(Math.random() * 4000 + 3000);
    timer = setTimeout(setGreenColor, randomNumber);

    waitingForStart = false;

    console.log("Random Getal: ", randomNumber);
};

mainMenu.addEventListener("click", () => {
   mainMenu.classList.remove("active");
   startGame();
});

const displayReactionTime = (rt) => {
  clickableArea.style.backgroundColor = "#faf0ca";
  message.innerHTML = `<div class='reaction-time-text'>${rt} ms</div>Click to continue.`;
  greenDisplayed = false;
  waitingForStart = true;
}

clickableArea.addEventListener("click", () => {
     if (greenDisplayed) {
        let clickTime = Date.now();
        let reactionTime = clickTime - timeNow;
        console.log("Reactie Tijd: ", reactionTime);
        displayReactionTime(reactionTime);
        return;
     }

     if (waitingForStart) {
      startGame();
      return;
     }
});