const primaryNav = document.querySelector(".nav");
const navToggle = document.querySelector(".mobile-nav-open");
const navClose = document.querySelector(".mobile-nav-close");
const navLink = document.querySelectorAll(".nav li");

navToggle.addEventListener("click", () => {
  primaryNav.setAttribute("data-visible", true);
  navToggle.setAttribute("aria-expanded", true);
  navToggle.style.display = "none";
  navClose.style.display = "block";
  navLink.forEach((link, index) => {
    link.style.animation = `navLinkFade 0.3s ease-out forwards ${
      index / 6 + 0.8
    }s`;
  });
});

navClose.addEventListener("click", () => {
  primaryNav.setAttribute("data-visible", false);
  navToggle.setAttribute("aria-expanded", false);
  navToggle.style.display = "block";
  navClose.style.display = "none";
  navLink.forEach((link) => {
    link.setAttribute("style", "");
  });
});
