// Main JavaScript file for dynamic features

console.log("main.js loaded successfully!");

// Example: Add a simple click handler to the document body for testing
document.addEventListener("click", (e) => {
  console.log(`Clicked at coordinates: ${e.clientX}, ${e.clientY}`);
});

// Mobile Navigation Toggle (Event Delegation)
document.addEventListener("click", (e) => {
  const hamburger = e.target.closest(".navbar-hamburger");
  const mobileMenuLink = e.target.closest(".mobile-menu a");

  // Handle Hamburger Click
  if (hamburger) {
    const mobileMenu = document.querySelector(".mobile-menu");
    if (mobileMenu) {
      mobileMenu.classList.toggle("is-open");

      // Animate Hamburger
      const spans = hamburger.querySelectorAll("span");
      if (mobileMenu.classList.contains("is-open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 6px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    }
  }

  // Handle Link Click (Close Menu)
  if (mobileMenuLink) {
    const mobileMenu = document.querySelector(".mobile-menu");
    const hamburger = document.querySelector(".navbar-hamburger");

    if (mobileMenu) {
      mobileMenu.classList.remove("is-open");
    }

    if (hamburger) {
      const spans = hamburger.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  }
});

// === SCROLL EFFECTS ===
// Create Scroll-to-Top Button via JS (so we don't mess with HTML structure)
const scrollBtn = document.createElement("button");
scrollBtn.className = "scroll-to-top";
scrollBtn.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>
`;
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll Event Listener
window.addEventListener("scroll", () => {
  const navbarInner = document.querySelector(".navbar-inner");
  const scrollY = window.scrollY;

  // 1. Sticky Navbar Transformation
  if (navbarInner) {
    if (scrollY > 50) {
      navbarInner.classList.add("scrolled");
    } else {
      navbarInner.classList.remove("scrolled");
    }
  }

  // 2. Show/Hide Scroll-to-Top Button
  if (scrollY > 500) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});
