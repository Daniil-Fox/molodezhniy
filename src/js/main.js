import "./_components.js";
import { burger } from "./functions/burger.js";
import { Fancybox } from "@fancyapps/ui";

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
