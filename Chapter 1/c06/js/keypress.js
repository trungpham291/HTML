var el;
function charCount(e) {
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById('message').value;
    charDisplay = document.getElementById('charatersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'last Key in ASCII code: ' + e.keyCode; 
}
el = document.getElementById('message');
el.addEventListener('keyup', charCount, false);