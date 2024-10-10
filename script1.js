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
document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const items = document.querySelectorAll('.experience-item');
  const totalItems = items.length;
  let autoSlideInterval; // Variable to store the interval

  function slideExperience() {
      const offset = -currentIndex * 100; // Each item takes 100% of the width
      document.querySelector('.experience-container').style.transform = `translateX(${offset}%)`;
  }

  // Function to start automatic sliding
  function startAutoSlide() {
      autoSlideInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % totalItems; // Move to next item
          slideExperience();
      }, 5000); // Change slide every 5 seconds
  }

  // Function to stop automatic sliding
  function stopAutoSlide() {
      clearInterval(autoSlideInterval);
  }

  // Start automatic sliding on page load
  startAutoSlide();

  // Pause sliding on mouse hover
  document.querySelector('.experience-slider').addEventListener('mouseenter', stopAutoSlide);

  // Resume sliding when mouse leaves
  document.querySelector('.experience-slider').addEventListener('mouseleave', startAutoSlide);
});

// Menu show/hide
function showMenu() {
    document.getElementById("navlinks").style.right = "0";
}

function hideMenu() {
    document.getElementById("navlinks").style.right = "-200px";
}
function showSection(sectionId) {
  const details = document.querySelectorAll('.about-detail');
  details.forEach(detail => {
      detail.style.display = 'none';
  });
  document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.style.display = 'none';
  document.getElementById('thank-you-message').style.display = 'block';
  setTimeout(() => {
      document.getElementById('thank-you-message').style.display = 'none';
      this.reset();
      this.style.display = 'block';
  }, 2000);
});

