import { ssSlider } from "./sliders.js";
const tabs = document.querySelectorAll("[data-tab]");

if (tabs.length > 0) {
  const tabsContent = document.querySelectorAll("[data-tab-content]");

  function clearActive() {
    tabs.forEach((el) => {
      el.classList.remove("active");
    });
  }

  tabs.forEach((t, idx) => {
    t.addEventListener("click", (e) => {
      const dataset = t.dataset.tab;
      e.preventDefault();
      clearActive();
      t.classList.add("active");
      ssSlider.slideTo(idx);
    });
  });
}
