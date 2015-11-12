$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 2){
            $(".navbar-background").css({"background-color":"white"});
            $(".img-navbar").css({"width":"60"});
        }
        if($(window).scrollTop() < 2){
            $(".navbar-background").css({"background-color":"transparent"});
            $(".img-navbar").css({"width":"100"});
        }
    })
})



$(document).ready(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 80
        }, 1000);
        return false;
      }
    }
  });
});
