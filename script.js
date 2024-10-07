
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


