 const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");

menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

// Close menu when clicking anywhere outside the menu
document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});