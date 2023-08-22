const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

// global effects
ctx2.fillStyle='green';
ctx2.lineWidth = 10;
ctx2.lineCap = 'round';
let size = 200;
let sides = 7;
let maxLevel = 3;
let scale = 0.5;
let spread = 2;
let branches = 2;
let color = 'hsl('+ Math.random() * 360 +' , 100%, 50%)'



function drawBranch(level){
    if( level > maxLevel) return;
    ctx2.beginPath();
    ctx2.moveTo(0, 0);
    ctx2.lineTo(size, 0);
    ctx2.stroke();
    for(let i = 0; i < branches; i++){
        ctx2.save();
        ctx2.translate(size - (size/branches) * i, 0);
        ctx2.rotate(spread);
        ctx2.scale(scale, scale);
    
        drawBranch(level + 1);
        ctx2.restore();
    
        ctx2.save();
        ctx2.translate(size - (size/branches) * i, 0);
        ctx2.rotate(-spread);
        ctx2.scale(scale, scale);
    
        drawBranch(level + 1);
        ctx2.restore();
    }

   
};




function drawFractal(){
    ctx2.save();
    ctx2.strokeStyle = color;
    ctx2.translate(canvas2.width/2, canvas2.height/2);
 
    for(let i = 0; i < sides; i++){
   
        ctx2.rotate((Math.PI * 2)/ sides);
        drawBranch(0);
    }

    
    ctx2.restore();

}

drawFractal();


