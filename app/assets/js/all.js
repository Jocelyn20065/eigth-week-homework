$(function() {
  console.log('Hello Bootstrap5');
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor : true,
 
});

var swiper = new Swiper(".SwiperGroup", {
  slidesPerView:'auto',
  grid: {
  rows: 1,    //slidesPerColumn: 2, swiper6寫法
  fill: 'row',//slidesPerColumnFill: 'row',  swiper6寫法
},
  spaceBetween: 10,
  width:500,
  breakpoints: {
    767: {
      slidesPerView:2,
      slidesPerGroup: 1,
      spaceBetween:30,
      grid: {
        rows: 2,    //slidesPerColumn: 2, swiper6寫法
        fill: 'row',//slidesPerColumnFill: 'row',  swiper6寫法
      },
      width:800,
    },
   }



  
});


