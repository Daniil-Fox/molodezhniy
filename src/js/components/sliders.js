import { Swiper } from "swiper";
import {
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

Swiper.use([Navigation, Pagination, FreeMode, EffectFade, Thumbs]);
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

let ssSlider = null;
const tabs = new Swiper(".about-benefits__slider", {
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
ssSlider = new Swiper(".about-benefits__ss", {
  autoHeight: true,
  spaceBetween: 20,
  slidesPerView: 1,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  thumbs: {
    swiper: tabs,
  },
});
export { ssSlider };
