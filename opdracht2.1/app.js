let block = document.getElementById("div");
let position = 0;

function move(){
    position += 50;
    block.style.left = position + "px";
}

setInterval(move, 1000);