import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Navigation, Pagination]);
new Swiper(".about__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".about__pagination",
    clickable: true,
  },

  navigation: {
    prevEl: ".about-prev",
    nextEl: ".about-next",
  },
});
