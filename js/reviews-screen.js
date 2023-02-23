$(document).ready(function(){
  $('.reviews-screen__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1366,
          settings: {
          slidesToShow: 1
        }
      }]
  })
})
