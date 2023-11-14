function checkLength(e, minLength) {
    var el, elMsg;
    if (!e) {
        e = window.Event;
    }
    el = e.target || e.srcElement;
    elMsg = el.nextSibling;

    if (el.value.lengh < minLength) {
        elMsg.innerHTML = 'Username must be ' + minLength + 'charaters or more';
    }else {
        elMsg.innerHTML = '';
    }
}
var elUsername = document.getElementById('username');
if (elUsername.addEventListener) {
    elUsername.addEventListener('blur', function(e) {
        checkLength(e, 5);
    }, false);
}else {
    elUsername.attachEvent('onblur', function(e) {
        checkLength(e, 5);
    });
}