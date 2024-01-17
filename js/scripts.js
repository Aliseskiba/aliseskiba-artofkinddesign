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


$(document).ready(function(){
    $(".navbar a").on('click', function(event) {
  
      if (this.hash !== "") {
  
        event.preventDefault();
  
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1300, function(){
  
          window.location.hash = hash;
        });
      }
    });
  });
