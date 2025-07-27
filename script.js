// Select elements
const sideMenu = document.querySelector("#sideMenu");
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

// Open and Close Menu
function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

// Sticky Navbar on Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navBar.classList.add("bg-white", "bg-opacity-50", "backdrop-blur");
  } else {
    navBar.classList.remove("bg-white", "bg-opacity-50", "backdrop-blur");
  }
});

// Close menu when clicking on a link
document.querySelectorAll("#sideMenu a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Optional: Close menu when clicking outside the menu (if backdrop)
document.addEventListener("click", (e) => {
  if (sideMenu && !sideMenu.contains(e.target) && !e.target.closest("button")) {
    closeMenu();
  }
});
