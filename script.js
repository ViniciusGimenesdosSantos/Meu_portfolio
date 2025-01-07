const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section, header");
const navbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");

window.addEventListener("scroll", () => {
  initApp();
});

const initApp = () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  sections.forEach((section, index) => {
    if (window.pageYOffset >= section.offsetTop - 50) {
      navbarLinks.forEach((link) => {
        link.classList.remove("active");
      });
      navbarLinks[index].classList.add("active");
    }
  });

  };

