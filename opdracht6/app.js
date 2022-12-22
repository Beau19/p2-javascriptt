window.addEventListener("load", function () {
    const canvas = document.querySelector("canvas");
    console.log(canvas);
    // const ctx = canvas.getContext("2d");
    
    // lengte en breedte
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // variabelen
    let painting = false;

 function startPosition(e) {
    painting = true;
    console.log("i'm paiting");
    draw(e);
 };

 
 function finishedPosition() {
    painting = false;
    ctx.beginPath()
 };

 function draw(e) {
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.ClientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
 };

 function draw() {
    if(!painting) return;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.ClientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
 };


 // Event Listeners
 canvas.addEventListener("mousedown", startPosition);
 canvas.addEventListener("mouseup", finishedPosition);
 canvas.addEventListener("mousemove", draw);
});





