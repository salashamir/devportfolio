const navAppear = () => {
  // DOM Elements
  const burger = document.querySelector(".nav-burger");
  const navList = document.querySelector(".nav__links");
  const navItems = document.querySelectorAll(".nav__links li");
  const navLinks = document.querySelectorAll(".nav__links.nav-active li a");
  burger.addEventListener("click", () => {
    // Toggle Nav for Mobile
    navList.classList.toggle("nav-active");

    // Animate Links
    navItems.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.4
        }s`;
      }
    });

    // Burger/Close Button Animation
    burger.classList.toggle("toggleOpenClose");
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.toggle("nav-active");
    });
  });
};

navAppear();
