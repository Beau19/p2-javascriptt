let button = document.getElementById("button");
let p = document.getElementById("paragraaf");
let startTimer;
let stopTimer;

function start(){
    document.body.style.backgroundColor = "red";
    button.style.display = "none";
    let random = Math.floor((Math.random() + 1  * 9 )* 1000);

    setTimeout(() => {
        document.body.style.backgroundColor = "green";
        startTimer = Date.now()
        console.log(start);
    }, random)
    

}

function stop(){
    if (document.body.style.backgroundColor == 'red') return;
   document.body.style.backgroundColor == 'blue';

    stopTimer = Date.now();

    let end = stopTimer - startTimer;
    
p.innerText = end;
}