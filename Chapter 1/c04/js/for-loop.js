var scores = [24, 32, 17];       //array of scores 
var arrayLength = scores.length; // Items in array
var roundNumber = 0 ;            //Current round
var msg = '';                    // Message


//Loop through the items in the array 
for (var i = 0; i < arrayLength; i++)
{
    // Add 1  to the current round 
    roundNumber = (i+1);

    // write the current round to message
    msg += 'Round' + roundNumber + ':';

    //Get the score from the scores array
    msg += scores[i] + '<br/>';
}

document.getElementById('answer').innerHTML = msg;