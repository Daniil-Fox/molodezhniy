import "./_components.js";
import { burger } from "./functions/burger.js";
import { Fancybox } from "@fancyapps/ui";

Fancybox.bind('[data-fancybox="gallery1"]', {});
Fancybox.bind('[data-fancybox="gallery2"]', {});
Fancybox.bind('[data-fancybox="gallery3"]', {});

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
