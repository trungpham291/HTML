function checkUsername() {
    var elMsg = document.getElementById('feedback');
    var elUsername = document.getElementById('username');
    if(elUsername.ariaValueMax.length < 5) {
        elMsg.textContent = 'Username must be 5 charaters or more';
    } else{
        elMsg.textContent = '';
    }
}