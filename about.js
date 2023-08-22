const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth * 0.8;
canvas2.height = window.innerHeight * 0.8;

// global effects
ctx2.strokeStyle = 'yellow';
ctx2.fillStyle='green';
ctx2.lineWidth = 30;
let size = 200;
let sides = 5;
let maxLevel = 1;

ctx2.save();
ctx2.translate(canvas2.width/2, canvas2.height/2);
ctx2.scale(1, 1);
ctx2.rotate(0);

function drawBranch(level){
    if( level > maxLevel) return;
    ctx2.beginPath();
    ctx2.moveTo(0, 0);
    ctx2.lineTo(size, 0);
    ctx2.stroke();

    ctx2.save();
    ctx2.translate(size/2, 0);
    ctx2.rotate(0.6);
    ctx2.scale(0.8, 0.8);

    drawBranch(level + 1);
    ctx2.restore();

    ctx2.save();
    ctx2.translate(50, 0);
    ctx2.rotate(-0.6);
    ctx2.scale(0.8, 0.8);

    drawBranch(level + 1);
    ctx2.restore();
};

drawBranch(0);

/*for(let i = 0; i < sides; i++){
   
    ctx2.rotate((Math.PI * 2)/ sides);
}*/

ctx2.restore();
