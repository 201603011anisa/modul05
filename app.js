var scores, roundScore, activePlayer, gamePlaying,A=0;

init();

	document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dadu = Math.floor(Math.random() * 6) + 1;
        var dadu2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var daduDOM = document.querySelector('.dadu');
        var daduDOM2 = document.querySelector('.dadu2');
        daduDOM.style.display = 'block';
        daduDOM2.style.display = 'block';
        daduDOM.src = 'dice-' + dadu + '.png';
        daduDOM2.src = 'dice-' + dadu2 + '.png';
        
        var simpan = document.createTextNode("[" +dadu2 + "," + dadu + "]");
        document.getElementById('history_').appendChild(simpan);


        //3. Update the round score IF the rolled number was NOT a 1
        if (dadu !== 1 && dadu2 !== 1) {
            //Add score
            roundScore += dadu+dadu2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            if (dadu===6 || dadu2===6){
                A+=1;
            if (A===2 ){
                scores[activePlayer]=0;
                document.querySelector('#score-'+activePlayer) .textContent=0
                nextPlayer ();
            }
            }
            else {
                A=0;
            }
        }
        else { A=0
            //Next player
            nextPlayer();
        }
    }    
});

document.querySelector('.btn-hold').addEventListener("click", function() {
    if (gamePlaying) {
var limit = document.querySelector('.finalscore').value;
        
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
var finalscore;
        if(limit){
            finalscore=limit;
        }
        else{
            finalscore=100;
        }

        if (scores[activePlayer] >= finalscore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dadu').style.display = 'none';
            document.querySelector('.dadu2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {

            nextPlayer();
        }
    }
});


function nextPlayer() {

	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	// if(activePlayer === 0) {
	// 	activePlayer = 1;
	// }  else {
	// 	activePlayer = 0;
	// }
	roundScore = 0;
    A=0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
}
	
	document.querySelector('.btn-new').addEventListener("click", init); 

	function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dadu').style.display = 'none';
    document.querySelector('.dadu2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}