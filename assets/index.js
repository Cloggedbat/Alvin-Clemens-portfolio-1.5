// starting up the swiper 

var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
// making the the landing page pictures buttons
 