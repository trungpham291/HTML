var pass = 50;     //Pass mark 
 var score = 90;    //Score

 //check if the user has passed
 var hasPassed = score >= pass;


 //write the message into the page
 var el = document.getElementById('answer');
 el.innerHTML = 'Level passed:' + hasPassed;