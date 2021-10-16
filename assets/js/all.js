"use strict";

var demoSwiper = document.querySelector(".demoSwiper");

if (demoSwiper) {
  var swiper = new Swiper(".demoSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    grabCursor: true
  });
}

var recommandSwiper = document.querySelector(".recommandSwiper");

if (recommandSwiper) {
  var _swiper = new Swiper(".recommandSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 3,
      fill: 'row'
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 1,
          fill: 'row'
        }
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'row'
        }
      }
    }
  });
}

var courseSwiper = document.querySelector(".courseSwiper");

if (courseSwiper) {
  var _swiper2 = new Swiper(".courseSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 3,
      fill: 'row'
    },
    breakpoints: {
      992: {
        slidesPerView: 3
      }
    }
  });
}
//# sourceMappingURL=all.js.map
