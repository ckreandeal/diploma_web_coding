// init Swiper:
new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centerSlides: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',

  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item--active',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.slider__button--next',
        prevEl: '.slider__button--prev',
      },
    }
  }
});



