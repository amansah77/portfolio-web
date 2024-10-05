
    const heading = document.querySelector('.intro-text h1');

    // Listen for the animation to end and remove the blinking cursor
    heading.addEventListener('animationend', (event) => {
        if (event.animationName === 'typewriter') {
            heading.classList.add('revert'); // Adds the class to stop cursor and revert styles
        }
    });
//about me
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.about-detail');
        sections.forEach(section => {
            section.style.display = 'none'; // Hide all sections
        });
        document.getElementById(sectionId).style.display = 'block'; // Show the selected section
    }

// Line graph for skills section
const ctx = document.getElementById('skillsChart').getContext('2d');

const skillsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'],
    datasets: [{
      label: 'Skill Level',
      data: [85, 80, 90, 70, 60, 75],
      backgroundColor: 'rgba(255, 87, 51, 0.2)',
      borderColor: '#ff5733',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
