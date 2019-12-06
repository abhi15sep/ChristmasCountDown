let canvas=document.querySelector(".canvas"),ctx=canvas.getContext("2d"),
snows=[],snowCount=300;
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//will generate a random
function random(min,max){
    return min+Math.random()*(max-min+1);
}
/**
 * will be used to reset the values of the canvas 
 * if the screen size changes and also 
 * it will reset the size of our flakes.
 */
function clientResize(e){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}
function createSnows(){
    for(let i=0;i<snowCount;i++){
        snows.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,
            opacity:(Math.random()*0.25)+0.8,
            speedX:random(-11,11),//move the snowflake around 
            speedY:random(7,15),//the screen in different speeds
            radius:random(0.5,3.5)
        })
    }
}
function drawSnows(){
    for(let i=0;i<snowCount;i++){
        let gradient = ctx.createRadialGradient(
            snows[i].x, //innerX
            snows[i].y, //innerY
            0,          //innerRadius
            snows[i].x, //outerX
            snows[i].y, //outerY
            snows[i].radius //outerRadius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255," + snows[i].opacity + ")");  // white
        gradient.addColorStop(.5, "rgba(210, 236, 242," + snows[i].opacity + ")");  // bluish
        gradient.addColorStop(1, "rgba(237, 247, 249," + snows[i].opacity + ")");   // lighter bluish
        
        ctx.beginPath();
        ctx.arc(
            snows[i].x, //arcX
            snows[i].y, //arcY
            snows[i].radius, //arc radius
            0, //start
            Math.PI*2, //end 
            false
        );
        ctx.fillStyle=gradient;
        ctx.fill();
    }
}
function moveSnows(){
    for(let i=0;i<snowCount;i++){
        snows[i].x+=snows[i].speedX;
        snows[i].y+=snows[i].speedY;
        if(snows[i].y>canvas.height){
            snows[i].x=Math.random()*canvas.width*1.5;
            snows[i].y=-50;
        }
    }
}
function updateSnows(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawSnows();
    moveSnows();
}
function init(){
    window.addEventListener('resize',clientResize);
    setInterval(updateSnows,90);
    createSnows();
}
init();