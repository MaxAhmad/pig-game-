 
 var scores, roundScore, activePlayer;

 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;

 document.querySelector('#current-0').textContent = '0';
 document.querySelector('#score-0').textContent = '0';
 document.querySelector('#current-1').textContent = '0';
 document.querySelector('#score-1').textContent = '0';

 document.querySelector('.dice').style.display = 'none';
 document.querySelector('.btn-roll').addEventListener('click', function(){
     //display the dice
    document.querySelector('.dice').style.display = 'block';

    //generate random number and set the random number to display the corresponding number on the dice
    dice = Math.floor(Math.random () * 6)+ 1;
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    
    //add each generated number to the current score if it is not a one
    if(dice !== 1){
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    }else {
        //if dice score is 1
        nextPlayer();
        
    }
 });

 document.querySelector('.btn-hold').addEventListener('click', function(){
    //Add the roundscore value to the score
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
    //set the winner
    if(scores[activePlayer] >= 20){
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
     }
     //switch to the nexxt player
     nextPlayer();
 });

 function nextPlayer(){
    //if dice score is 1
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //set the current score to 0 when switching the players
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    //chnage the active class to the current player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');



 }

 
