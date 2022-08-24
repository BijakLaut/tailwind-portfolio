// Navbar Fixed
const navLinks = document.querySelectorAll("nav li a");

window.onscroll = function () {
  const header = document.querySelector("header");
  const home = document.querySelector("#home");
  const project = document.querySelector("#project");
  const skill = document.querySelector("#skill");
  const hire = document.querySelector("#hire");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }

  if (
    window.scrollY >= home.offsetTop &&
    window.scrollY < project.offsetTop - 125
  ) {
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });

    navLinks[0].classList.add("active");
  } else if (
    window.scrollY >= project.offsetTop - 125 &&
    window.scrollY < skill.offsetTop - 160
  ) {
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    navLinks[1].classList.add("active");
  } else if (
    window.scrollY >= skill.offsetTop - 160 &&
    window.scrollY < hire.offsetTop - 165
  ) {
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    navLinks[2].classList.add("active");
  } else if (window.scrollY >= hire.offsetTop - 165) {
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    navLinks[3].classList.add("active");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Section Target
navLinks.forEach((element) => {
  element.addEventListener("click", function (e) {
    //Mengambil isi href
    let destination = element.getAttribute("href");

    //Menangkap elemen
    let elemenDest = document.querySelector(destination);

    scrollTo(0, elemenDest.offsetTop - 80);

    e.preventDefault();
  });
});
