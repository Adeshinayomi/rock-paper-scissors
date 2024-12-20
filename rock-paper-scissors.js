let score= JSON.parse(localStorage.getItem('score')) ||  {
  wins:0,
  losses:0, 
  ties:0
};

updatescore();

function playGame(playerMove){
  
const computerMove= pickComputerMove();

let result='';

if (playerMove === 'scissors'){
if(computerMove === 'rock') {
 result='You lose.';
}else if(computerMove === 'paper'){
 result='You win.';
}else if(computerMove === 'Scissors'){
 result='Tie.';
}
}else if (playerMove === 'paper'){
  if(computerMove === 'rock'){
  result='You win.';
  }else if(computerMove === 'paper'){
  result='Tie.';
  }else if(computerMove === 'Scissors'){
  result='You lose.';
  }
}else if( playerMove === 'rock'){
  if(computerMove === 'rock'){
  result='Tie.';
  }else if(computerMove === 'paper'){
  result='You lose.';
  }else if(computerMove === 'Scissors'){
  result='You win.';
  }
}

if (result === 'You win.'){
  score.wins += 1;
}else if(result === 'You lose.'){
  score.losses += 1;
}else if(result === 'Tie.'){
  score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

 updatescore();

 
document.querySelector('.js-moves').
innerHTML=`
you <img src="images/${playerMove}-emoji - copy.png" alt="" class="move-icon">
<img src="images/${computerMove}-emoji - copy.png" alt="" class="move-icon">computer`

document.querySelector('.js-result').innerHTML= result; 
}


document.body.addEventListener('keydown',(event)=>{
  if(event.key === 'r'){
    playGame('rock');
  }else if(event.key === 's'){
    playGame('scissors');
  }else if(event.key === 'p'){
    playGame('paper');
  }
})


function updatescore() {
document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`
}

function pickComputerMove(){
  let computerMove ='';

const randomNumber = Math.random(); 

if (randomNumber >= 0 && randomNumber < 1/3) {
computerMove='rock'
} else if (randomNumber >= 1/3 && randomNumber < 2/3){
computerMove= 'paper'
} else if(randomNumber >= 2/3 && randomNumber < 1){
computerMove= 'Scissors'
}
return computerMove;
}

let isAutoPlay=false
let intervalId;

 function autoPlay(){
  if(!isAutoPlay){
    intervalId=setInterval(()=>{
      const playerMove=pickComputerMove();
      playGame(playerMove);
    },1000)

    isAutoPlay=true;
  }else{
    clearInterval(intervalId);
    isAutoPlay=false
  }
 }