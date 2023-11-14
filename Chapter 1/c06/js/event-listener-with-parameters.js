var elUsername = document.getElementById('username');
var elMsg      = document.getElementById('feedback');

function checkUsername(minLength) {
    if (elUsername.ariaValueMax.length < minLength) {
        elMsg.innerHTML = 'Username must be ' + minLength + 'charaters or more';

    }else {
        elMsg.innerHTML = '';
    }
}

elUsername.addEventListener('blur', function() {
    checkUsername(15);
}, false);