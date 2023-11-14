var score = 75;
 var msg;


 if (score>= 50)  // if score is 50 or higher
{
    msg = 'Congratulation!';
    msg += 'Processedd to the next round';
}
  
var el = document.getElementById('answer');
el.textContent = msg;