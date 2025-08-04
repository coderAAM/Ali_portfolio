// Select all project cards
const projectCards = document.querySelectorAll('.card');

// Select sections
const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('#autocadSkills'); // Skills section
const contactSection = document.querySelector('#contactSection'); // Contact section

// Select light/dark toggle buttons
const resumeButtons = document.querySelectorAll('.resume');

// Select navigation links
const navLinks = document.querySelectorAll('.navberOne a');

// Show project cards, hide others
function showProjects() {
    hideAll();
    projectCards.forEach(card => card.style.display = 'block');
}

// Show about section, hide others
function showAbout() {
    hideAll();
    aboutSection.style.display = 'block';
}

// Show skills section, hide others
function showSkills() {
    hideAll();
    skillsSection.style.display = 'block';
}

// Show contact section, hide others
function showContact() {
    hideAll();
    contactSection.style.display = 'block';
}

// Hide all sections
function hideAll() {
    projectCards.forEach(card => card.style.display = 'none');
    aboutSection.style.display = 'none';
    skillsSection.style.display = 'none';
    contactSection.style.display = 'none';
}

// Light/dark toggle
resumeButtons.forEach(button => {
    if (button.textContent.trim().toLowerCase() === 'light') {
        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});

// Setup link behavior
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const text = e.target.textContent.trim().toLowerCase();

        if (text === 'project') {
            showProjects();
        } else if (text === 'about') {
            showAbout();
        } else if (text === 'skills') {
            showSkills();
        } else if (text === 'contact') {
            showContact();
        } else {
            hideAll(); // For Resume or other links
        }

        if (link.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

// ✅ Show Skills section by default on page load
window.addEventListener('DOMContentLoaded', () => {
    showSkills();
});

