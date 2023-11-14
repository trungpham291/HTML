var pass = 50;
var scores = 75;
var msg;


// select message to write bassed on score
if(scores > pass )
{
    msg = 'Congratulation, you passed!';
}else
{
    msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;