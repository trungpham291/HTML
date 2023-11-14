var score1 = 90;        // Round 1 score
var score2 = 95;        // Round 2 score
var highScore1 = 75;     // Round 1 high score
var highScore2 = 95;    // Round 2 high score

// check id scores are higher than current high scores 
var comparion = (score1 + score2)>(highScore1+highScore2);


//write the message into the page
var el = document.getElementById('answer');
el.innerHTML = 'New high score: ' + comparion;