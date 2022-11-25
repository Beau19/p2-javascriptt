let block = document.getElementById("div");
let position = 0;
function move() {
    if (position >= window.innerWidth) {
        position = 0;
    } else {
      position += 50;
      block.style.left = position + "px";
    }
}

setInterval(move, 1000);

let colors = ["yellow", "green", "purple", "pink", "turquoise"];

block.addEventListener("click", function () {
      let random_color = Math.floor(Math.random() * 5) ;

      block.style.backgroundColor = colors[random_color];
});