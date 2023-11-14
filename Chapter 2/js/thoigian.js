var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Chao buoi Toi';
}else if (hourNow > 12) {
    greeting = 'Chao buoi chieu';

}else if (hourNow >0) {
    greeting = 'Chao Buoi Sang';
}else {
    greeting = ''
}
document.write('<h1>' + greeting + '</h1>');

function dongho(){
    var Date = new Date();
    var gio = Date.getHours();
    var phut = Date.getMinutes();
    var giay = Date.getSeconds();

    if(gio < 10) {
        gio = "0" + gio;
    }


    document.getElementById('clock').innerHTML = gio

}