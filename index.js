// Navbar Section
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    navMenu.classList.remove("active");
  })
);
// Navbar Section Ended

// Show active highlight for the menu
const highLightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const featuresMenu = document.querySelector("#features-page");
  const contactMenu = document.querySelector("#contact-page");
  let scrollPos = window.scrollY;

  // Adds "highlight" class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    featuresMenu.classList.remove("highlight");
    contactMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    featuresMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    homeMenu.classList.remove("highlight");
    contactMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 6123) {
    contactMenu.classList.add("highlight");
    featuresMenu.classList.remove("highlight");
    aboutMenu.classList.remove("highlight");
    homeMenu.classList.remove("highlight");
    return;
  }
  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

// Call the 'highLightMenu' function
window.addEventListener("scroll", highLightMenu);
window.addEventListener("click", highLightMenu);

// Active highlight Ended
