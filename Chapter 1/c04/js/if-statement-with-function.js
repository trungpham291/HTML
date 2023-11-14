var score = 75;  //Score
var msg = '';    //message


function congratulate()
{
    msg += ' Congralations! ';
}
 if(score >= 50 )
 {
    congratulate();
    msg+= 'Proceed to the next round.';
 }
  
 var el = document.getElementById('answer');
 el.innerHTML = msg;