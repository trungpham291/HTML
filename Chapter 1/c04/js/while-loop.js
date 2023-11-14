var i = 1;
var msg = '';

// score 5 items table in a variable 
while(i<10)
{
    msg += i+ 'x 5 = ' + (i + 5) + '<br/>';
    i++;
}
document.getElementById('answer').innerHTML = msg;