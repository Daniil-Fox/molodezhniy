import { Swiper } from "swiper";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

Swiper.use([Navigation, Pagination, FreeMode]);
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

new Swiper(".about-benefits__slider", {
  slidesPerView: "auto",
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    320: {
      spaceBetween: 20,
    },
    769: {
      spaceBetween: 10,
    },
  },
});

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 768px)", ".partners__slider", {
    // loop: true,
    spaceBetween: 20,
    slidesPerView: "auto",
  });

  resizableSwiper("(max-width: 768px)", ".benefits__slider", {
    spaceBetween: 20,
    slidesPerView: "auto",
    centeredSlides: true,
  });
});
