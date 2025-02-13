import "./_components.js";
import { burger } from "./functions/burger.js";
import { Fancybox } from "@fancyapps/ui";
import "simplebar";
import ResizeObserver from "resize-observer-polyfill";
import {
  OverlayScrollbars,
  ScrollbarsHidingPlugin,
  SizeObserverPlugin,
  ClickScrollPlugin,
} from "overlayscrollbars";

window.ResizeObserver = ResizeObserver;
Fancybox.bind("[data-fancybox=builder-gallery]", {});

const header = document.querySelector("header");
const siteContainer = document.querySelector(".site-container");
let headerHeight = header.scrollHeight;
window.addEventListener("resize", (e) => {
  headerHeight = header.scrollHeight;
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    header.style.position = "fixed";
    header.style.top = 0;
    header.style.left = 0;
    header.style.right = 0;

    siteContainer.style.paddingTop = headerHeight + "px";
  } else {
    header.style.position = null;
    header.style.top = null;
    header.style.left = null;
    header.style.right = null;

    siteContainer.style.paddingTop = null;
  }
});

const galleryContainer = document.querySelector(".gallery-hero__items");

if (galleryContainer) {
  if (galleryContainer.children.length % 3 == 0) {
    galleryContainer.classList.add("gallery-hero__items--m3");
  }
  const galleryItems = [...galleryContainer.children];

  galleryItems.forEach((item, idx) => {
    Fancybox.bind(`[data-fancybox="gallery${idx}"]`, {});
  });

  const moreBtn = document.querySelector(".gallery-hero__more");

  if (moreBtn) {
    let visibleItems = 4;

    if (visibleItems >= galleryItems.length) {
      moreBtn.style.display = "none";
    }
    for (let i = visibleItems; i < galleryItems.length; i++) {
      galleryItems[i].style.display = "none";
    }

    moreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const newValue = visibleItems + 4;
      const items = galleryItems.slice(0, newValue);

      for (let i = 0; i < items.length; i++) {
        items[i].style.display = "block";
      }
      visibleItems += 4;
      if (newValue >= galleryItems.length) {
        moreBtn.style.display = "none";
        return;
      }
    });
  }
}

const videoWrapper = document.querySelectorAll(".video__wrapper");
if (videoWrapper.length > 0) {
  videoWrapper.forEach((wrapper) => {
    const video = wrapper.querySelector("video");
    wrapper.addEventListener("click", (e) => {
      video.setAttribute("controls", "");
      video.play();
      wrapper.classList.add("video__wrapper--start");
    });
  });
}

function updateFontSize() {
  const html = document.documentElement;

  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  const aspectRatio = screenWidth / screenHeight;
  console.log(aspectRatio);
  if (aspectRatio >= 21 / 9 && screenWidth > 1920) {
    html.style.fontSize = `10px`;
  } else if (aspectRatio >= 16 / 10 && screenWidth <= 1920) {
    html.style.fontSize = `calc(100vw / 192)`;
  } else if (aspectRatio >= 16 / 9 && screenWidth <= 1920) {
    html.style.fontSize = `calc(100vw / 192)`;
  } else {
    html.style.fontSize = `calc(100vw / 192)`;
  }
}

if (window.matchMedia("(min-width: 769px)").matches) {
  updateFontSize();
  window.addEventListener("resize", updateFontSize);
}

// OverlayScrollbars(document.querySelector("#myElement"), {
//   overflow: {
//     x: "hidden",
//   },
// });
