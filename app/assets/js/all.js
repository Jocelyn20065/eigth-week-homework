
const demoSwiper=document.querySelector(".demoSwiper");
 
if(demoSwiper){
  const swiper = new Swiper(".demoSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    grabCursor : true,
   
  });
  
}


const recommandSwiper=document.querySelector(".recommandSwiper")

if(recommandSwiper){
  const swiper = new Swiper(".recommandSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      grid: {
        rows: 3,
        fill: 'row',
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 1,
            fill: 'row',
          },
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row',
          },
        },
      },
    });
}



const courseSwiper =document.querySelector(".courseSwiper")

if(courseSwiper){
  const swiper = new Swiper(".courseSwiper", {
    slidesPerView:1,
    spaceBetween: 30,
    grid: {
      rows: 3,
      fill: 'row',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
    },
  });
}