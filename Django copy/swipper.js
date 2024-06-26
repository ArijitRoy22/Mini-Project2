document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // Pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
  