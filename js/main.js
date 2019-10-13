$(function(){

$('.slider__inner, .news__slider-inner ').slick({
  nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
  infinite: false
});

  $('select').styler();

  $('.header__btn-menu').on('click',function() {
    $('.menu ul').slideToggle();
  });

  $('.posts__list').bxSlider({
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideWidth: 370,
    slideMargin: 30,
    pager: false,
    shrinkItems: true,
    nextSelector: '.Next',
    prevSelector: '.Prev',
  });
  
});
