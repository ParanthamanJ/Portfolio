 const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close-btn");

menuToggle.addEventListener("click", () => {
    navLinks.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Close menu when clicking anywhere outside the menu
document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});


function openModal(id) {
    const modal = document.getElementById(id);

    if (!modal) return;

    modal.style.display = "flex";
    modal.offsetHeight; // Force layout calculation
    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    const modal = document.getElementById(id);

    if (!modal) return;

    modal.classList.remove("active");

    modal.addEventListener("transitionend", function hideModal(event) {
        if (event.target !== modal || event.propertyName !== "opacity") return;

        modal.style.display = "none";
        modal.removeEventListener("transitionend", hideModal);
    });

    document.body.style.overflow = "";
}


// Close when clicking outside the modal content
function closeModalOnOutside(event, id) {
    if (event.target.id === id) {
        closeModal(id);
    }
}

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        document.querySelectorAll(".modal").forEach(function (modal) {
            if (modal.style.display === "flex") {
                closeModal(modal.id);
            }
        });
    }
});

// Update the year in the footer
document.getElementById("year").textContent =
    new Date().getFullYear();

    
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
    backToTop.classList.add("tap-active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(() => {
        backToTop.classList.remove("tap-active");
    }, 300);
});