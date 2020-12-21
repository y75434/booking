var swiper = new Swiper('.topChoices .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    767:{
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  }
});

