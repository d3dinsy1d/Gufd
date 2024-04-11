export const doorsType = () => {
  if (document.querySelector(".doors-type")) {
   new Swiper(".doors-type__slider", {
     spaceBetween: 30,
 
     breakpoints: {
      320: {
        slidesPerView: 1,
      },
 
      480: {
        slidesPerView: 2,
      },
 
      1100: {
        slidesPerView: 3,
      },
    }
    });
  };
};