document.addEventListener('DOMContentLoaded', () => {
  const heading = document.querySelector('.typewriter');

  // Listen for the animation to end and remove the blinking cursor
  heading.addEventListener('animationend', (event) => {
      if (event.animationName === 'typewriter') {
          heading.classList.add('revert'); // Adds the class to stop cursor
      }
  });
});
// About Me Section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.about-detail');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
}

// Experience Sliding
let currentIndex = 0;
const items = document.querySelectorAll('.experience-item');
const totalItems = items.length;

function slideExperience() {
    const offset = -currentIndex * 100; // Each item takes 100% of the width
    document.querySelector('.experience-container').style.transform = `translateX(${offset}%)`;
}

// Automatic sliding every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems; // Move to next item
    slideExperience();
}, 5000);

// Menu show/hide
function showMenu() {
    document.getElementById("navlinks").style.right = "0";
}

function hideMenu() {
    document.getElementById("navlinks").style.right = "-200px";
}
