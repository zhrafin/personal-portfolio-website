function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const roles = ["Computer Science Engineer", "Researcher", "Data Analyst", "Developer", "Designer"];
let currentRoleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 80;
const erasingSpeed = 50;
const delayBetweenRoles = 1500;

function typeRole() {
    const dynamicText = document.getElementById("dynamic-text");

    if (isDeleting) {
        if (charIndex > 0) {
            dynamicText.textContent = roles[currentRoleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeRole, erasingSpeed);
        } else {
            isDeleting = false;
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeRole, typingSpeed);
        }
    } else {
        if (charIndex < roles[currentRoleIndex].length) {
            dynamicText.textContent += roles[currentRoleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, typingSpeed);
        } else {
            isDeleting = true;
            setTimeout(typeRole, delayBetweenRoles);
        }
    }
}

const slider = document.querySelector('.slider');
const projects = document.querySelectorAll('.project');
const nextArrow = document.querySelector('.next-arrow');
const prevArrow = document.querySelector('.prev-arrow');

let currentIndex = 0; // Current slide index
const projectCount = projects.length; // Total number of projects

// Determine the number of projects visible per view based on screen size
const projectsPerView = () => {
    if (window.innerWidth <= 600) return 1; // Small screen: 1 project
    if (window.innerWidth <= 1200) return 2; // Medium screen: 2 projects
    return 3; // Large screen: 3 projects
};

// Update the slider position
const updateSlider = () => {
    const projectWidth = slider.clientWidth / projectsPerView(); // Width of each project
    slider.style.transform = `translateX(-${currentIndex * projectWidth}px)`; // Move the slider
};

// Auto Slide Functionality
let autoSlide = setInterval(() => {
    if (currentIndex < Math.ceil(projectCount / projectsPerView()) - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first group
    }
    updateSlider();
}, 5000); // Auto-slide every 5 seconds

// Manual Navigation - Next Arrow
nextArrow.addEventListener('click', () => {
    if (currentIndex < Math.ceil(projectCount / projectsPerView()) - 1) {
        currentIndex++;
    }
    updateSlider();
    clearInterval(autoSlide); // Stop auto-slide after manual navigation
    autoSlide = setInterval(() => {
        if (currentIndex < Math.ceil(projectCount / projectsPerView()) - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 5000);
});

// Manual Navigation - Previous Arrow
prevArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateSlider();
    clearInterval(autoSlide); // Stop auto-slide after manual navigation
    autoSlide = setInterval(() => {
        if (currentIndex < Math.ceil(projectCount / projectsPerView()) - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    }, 5000);
});

// Adjust slider position on window resize
window.addEventListener('resize', () => {
    currentIndex = 0; // Reset to the first group
    updateSlider();
});

// Initialize slider on page load
document.addEventListener('DOMContentLoaded', () => {
    updateSlider(); // Set the initial slider position
    setTimeout(typeRole, delayBetweenRoles); // Start dynamic typing effect
});
