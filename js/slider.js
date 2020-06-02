const slider = document.querySelector('.swiper-container')

let mySwiper = new Swiper (slider, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centerSlides: true,

  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
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
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  })



