function toggleMenu(){
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

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeRole, delayBetweenRoles);
});
