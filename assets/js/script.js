'use strict';



// add event on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



// navbar functionality

const [navbar, navToggler, navbarLinks] = [
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]")
];

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
  document.body.classList.toggle("active");
}

navToggler.addEventListener("click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNavbar);



// header active

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElemOnScroll);



// scroll reveal effect

const revealElements = document.querySelectorAll("[data-reveal]");

const revealOnScroll = function () {
  for (let i = 0; i < revealElements.length; i++) {

    // add revealed class on element, when visible in window
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
      revealElements[i].classList.add("revealed");

      // remove long transition from button, after 1 second
      if (revealElements[i].classList.contains("btn")) {
        setTimeout(function () {
          revealElements[i].style.transition = "0.25s ease";
        }, 1000);
      }
    }

  }
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();