$(document).ready(function(){
  $('.our-projects__slider').slick({
    arrows: true,
    appendArrows: $('.our-projects__slider-arrows-block'),
    dots: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
          settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
  })
})
