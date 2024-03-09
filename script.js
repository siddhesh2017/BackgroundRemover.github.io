  /*here math.random() gives a random number between 0-1 excluding 0&1 (ex: 0.4392532) so we 
  multiply it by 10 to get one digit number, then the number will be still in point (ex:2.54538403)
  to remove the part after point we use Math.floor() to get single digit 2.
  */ 
 /*
 Math.random() => to get random no 0-1
 *10 => to get single digit deci no
 Math.floor() => to get single digit no
 */ 
/*
    here we used clearInterval() because the count will continue in negative taking up the space to stop interval we use clearInterval()
*/

 let tmr_cnt = 60;
 let score = 0;
 let hitno = 0;

function makeBubbles() {  
    let clutter = '';
    for(let i = 1; i<=168; i++){
        let num = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}
function runTimer() {
    var tmr_int = setInterval(function(){
        if(tmr_cnt > 0){
            tmr_cnt--;
            document.querySelector('#time').textContent = tmr_cnt;
        }
        else{
            clearInterval(tmr_int);
            document.querySelector('#pbottom').innerHTML = "<h1 id='gameover'>GameOver</h1>";
        }
    }, 1000)
}

function randHit(){
    hitno = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitno;
}

function incScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector('#pbottom').addEventListener('click',function(event){
    let clickednum = Number(event.target.textContent);
    if(clickednum === hitno){
        incScore();
        makeBubbles();
        randHit();
    }
})

runTimer();
makeBubbles();
randHit();
