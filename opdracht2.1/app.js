let block = document.getElementById("div");
let position = 0;

function move() {
    if (position >= window.innerWidth) {
        position = 0;
    } else {
        position += 50;
        block.style.left = position = "px";
    }
}

setInterval(move, 1000);