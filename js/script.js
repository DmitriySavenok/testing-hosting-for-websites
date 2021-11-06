function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// Carousel-screen slider settings
$(document).ready(function(){
    $('.carousel-screen__slider').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        draggable:false
    });

    AOS.init({
        duration: 1500,
        once: true
      });
});

$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    
    $('#toTop').click(function() { 
        $('body,html').animate({scrollTop:0},800);
    });
});


// Scroll to href script
$(document).ready(function() {
    jQuery(".scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top - 16;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
    return false;
    });
  });