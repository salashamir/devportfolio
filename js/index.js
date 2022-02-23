// smooth scroll
const scroll = new SmoothScroll('a[href*="#"]');

// owl carousel jquery
$(document).ready(function () {
  // owl carousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 32,
    autoplay: true,
    nav: true,
    center: true,
    dots: false,
    lazyload: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next"),
    ],
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      640: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});

// typing effect
const texts = [
  "Web developer",
  "Front end developer",
  "Problem solver",
  "Design enthusiast",
  "React developer",
];

// word
let count = 0;
// individiual characters
let index = 0;
let currentText = "";
let letter = "";

// iife
(function type() {
  if (count === texts.length) {
    count = 0;
  }

  currentText = texts[count];

  letter = currentText.slice(0, ++index);

  document.querySelector(".hero__typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 300);
})();

// aos
AOS.init({
  offset: 100,
  duration: 1000,
});
