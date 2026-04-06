function setLang(lang) {
  const elements = document.querySelectorAll("[data-ja]");
  elements.forEach(e1 => {
    e1.textContent = e1.getAttribute("data-"+lang);
  });

const slider = document.querySelector(".slider");
  if (lang === "ja") slider.style.left = "0%";
  if (lang === "en") slider.style.left = "50.0%";
  if (lang === "zh") slider.style.left = "66.6%";
}

setLang("ja");
