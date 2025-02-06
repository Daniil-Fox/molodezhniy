const tabs = document.querySelectorAll("[data-tab]");

if (tabs.length > 0) {
  const tabsContent = document.querySelectorAll("[data-tab-content]");

  function clearActive() {
    tabs.forEach((el) => {
      el.classList.remove("active");
    });
    tabsContent.forEach((el) => {
      el.classList.remove("active");
    });
  }

  tabs.forEach((t) => {
    t.addEventListener("click", (e) => {
      const dataset = t.dataset.tab;
      e.preventDefault();
      clearActive();
      t.classList.add("active");
      document
        .querySelector(`[data-tab-content=${dataset}]`)
        .classList.add("active");
    });
  });
}
