var Welcome = " Welcome to Alise's portfolio site!";
console.log(Welcome);

function menuToggle() {
    var x = document.getElementById ('myNavtoggle');
    if (x.className === 'navtoggle'){
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}