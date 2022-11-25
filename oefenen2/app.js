let colors = ["green", "red", "blue"];

function changeColors() {
    
    

    let random_color = Math.floor(Math.random() * 3);


    document.body.style.backgroundColor = colors[random_color];
    
}

setInterval(changeColors, 100)