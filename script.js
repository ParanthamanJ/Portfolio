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

// Function to filter projects based on category
    function filterProjects(category) {
        var projects = document.querySelectorAll('.project');
        projects.forEach(function(project) {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    }

    // Function to open modal
    function openModal(id) {
        document.getElementById(id).style.display = "flex";
    }

    // Function to close modal
    function closeModal(id) {
        document.getElementById(id).style.display = "none";
    }

    // Show all projects on page load
    filterProjects('all');