window.onload = () => {

    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
       navigation:{
            nextEl:'#icon2',
            prevEl:'#icon1'
        }
      });
}