new Swiper(".features__slider", {
  navigation: {
    nextEl: ".features__btn-next",
    prevEl: ".features__btn-prev",
  },

  centeredSlides: false,
  simulateTouch: true,
  effect: "slide",

  mousewheel: {
    sensitivity: 1,
  },
  //   адаптивность
  breakpoints: {
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    410: {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    540: {
      slidesPerView: 1.8,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    675: {
      slidesPerView: 2.3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },
  },
});

new Swiper(".reviews__slider", {
  effect: "slide",

  pagination: {
    el: ".reviews__slider-pagination",
    clickable: true,
  },
  //   адаптивность
  breakpoints: {
    285: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

new Swiper(".blog__slider", {
  effect: "slide",
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  pagination: {
    el: ".blog__slider-pagination",
    clickable: true,
  },
  // адаптивность
  //   breakpoints: {
  //     300: {
  //       slidesPerView: 1,
  //       slidesPerGroup: 1,
  //       spaceBetween: 40,
  //     },
  //     575: {
  //       slidesPerView: 2,
  //       slidesPerGroup: 2,
  //       spaceBetween: 15,
  //     },
  //     875: {
  //       spaceBetween: 15,
  //       slidesPerView: 3,
  //       slidesPerGroup: 3,
  //     },
  //     1200: {
  //       slidesPerView: 4,
  //       slidesPerGroup: 4,
  //       spaceBetween: 20,
  //     },
  //   },
});
