function setLang(lang) {
  const elements = document.querySelectorAll("[data-ja]");
  elements.forEach(e1 => {
    el.textContent = el.getAttrobute("data-"+lamg);
  });

const slider = document.querySelector("slider");
  if (lane === "ja") slider.style.left = "0%";
  if (lane === "en") slider.style.left = "33.3%";
  if (lane === "zh") slider.style.left = "66.6%";
}

setLang("ja");
