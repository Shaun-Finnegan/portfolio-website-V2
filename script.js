const canvas = document.getElementById('canvas1');
const textDisplay = document.getElementById('text');
const phrases = ['HI! Im Shaun.','I make beautiful.', 'Websites.', 'and', 'Generative Art.'];
let currentPhrase = [];
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 700;
ctx.globalCompositeOperation = 'destination-over';

let hue = 0;
let number = 0;
let scale = 10;





window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});







function drawFlower(){
   let angle = number * 20;
   let radius = scale * Math.sqrt(number);
   let positionX = radius * Math.sin(angle) + 300;
   let positionY = radius * Math.cos(angle) + 300;
    ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 20, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue++;
};



class Line{
    constructor(canvas){
        this.canvas = canvas;
       this.X = Math.random() * this.canvas.width;
       this.Y = Math.random() * this.canvas.height;
       this.history = [{x: this.x, y: this.y}]
       this.lineWidth = Math.floor(Math.random() * 15 + 1);
       this.hue = Math.floor(Math.random() * 360);
    }

    draw(context){
        context.lineWidth = this.lineWidth;
        context.strokeStyle = 'hsl(' + this.hue + ', 100%, 50%)';
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        for(let i = 0; i < this.history.length; i++){
            context.lineTo(this.history[i].x, this.history[i].y);
        }
        context.stroke();
    }
}

const linesArray = [];
const numOfLines = 1;
for(let i = 0; i < numOfLines; i++){
    linesArray.push(new Line(canvas));
}
console.log(linesArray);
linesArray.forEach(line => line.draw(ctx));


function animate(){
drawFlower();
if(number > 300) return;
linesArray.forEach(line => line.draw(ctx));
requestAnimationFrame(animate);
};

animate();

let i = 0;
 let j = 0;
 let isDeleting = false;


 function loop () {
    
    textDisplay.innerHTML = currentPhrase.join('')
  
    if (i < phrases.length) {
  
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j])
        j++
        textDisplay.innerHTML = currentPhrase.join('')
      }

      if (isDeleting && j <= phrases[i].length){
        currentPhrase.pop(phrases[i][j])
        j--
      }
  
      if (j == phrases[i].length) {
        isDeleting = true;
      }

      if(isDeleting && j == 0){
        currentPhrase = [];
        isDeleting = false;
        i++;
        if( i == phrases.length){
            i = 0;
        }
      }

     

    }
    setTimeout(loop, 250);
 };


loop();