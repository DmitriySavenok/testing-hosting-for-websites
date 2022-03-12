let isScroll = 0, // доп. проверка
    targetScroll = 10; // расстояние до действия / в px

$(window).on('scroll', function(){
  if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
    isScroll = 1;
    $('.photo-main').removeClass('photo-position-from')
    $('.photo-main').addClass('photo-position-to');
    console.info('change 1');
  } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
    isScroll = 0;
    $('.photo-main').removeClass('photo-position-to')
    $('.photo-main').addClass('photo-position-from')
    console.info('change 0');
  }
});
