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

// gsap
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "20px 80%",
    end: "top 100px",
    scrub: 1,
    markers: false,
  },
});
tl.fromTo(
  ".one",
  {
    y: -100,
    opacity: 0,
  },
  { y: 0, opacity: 1, duration: 1 }
)
  .fromTo(
    ".two",
    {
      y: -100,
      opacity: 0,
    },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo(
    ".three",
    {
      y: -100,
      opacity: 0,
    },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo(
    ".four",
    {
      y: -100,
      opacity: 0,
    },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo(
    ".five",
    {
      y: -100,
      opacity: 0,
    },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo(
    ".six",
    {
      y: -100,
      opacity: 0,
    },
    { y: 0, opacity: 1, duration: 1 }
  )
  .fromTo(
    ".seven",
    {
      y: -100,
      opacity: 0,
    },
    { y: 0, opacity: 1, duration: 1 }
  );

// smoothscroll
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(e.currentTarget, e.currentTarget.getAttribute("href"));
    const element = document.getElementById(id);
    let position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
