// Active Link Toggle
const links = document.querySelectorAll('.nav-item');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Theme Toggle (Icon Switch)
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'white' ? '#0a0a12' : 'white';
    document.body.style.color = document.body.style.color === 'black' ? 'white' : 'black';
});






























// Hire Me Button Alert
document.querySelector('.btn-hire').addEventListener('click', () => {
    alert("Thank you for reaching out! Let's build something great.");
});

// Resume Download Simulation
document.querySelector('.btn-resume').addEventListener('click', () => {
    console.log("Downloading resume...");
    // window.location.href = 'path/to/resume.pdf'; 
});

// Add Hover effect to social icons
document.querySelectorAll('.social-links a').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.borderColor = '#6366f1';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});



































// Select all project link buttons
const projectLinks = document.querySelectorAll('.proj-link-btn');

projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // You can log which link was clicked for analytics
        const projectTitle = link.closest('.proj-card').querySelector('h3').innerText;
        console.log(`User clicked on: ${projectTitle}`);
    });
});

// View All Button Logic
const viewAllBtn = document.querySelector('.proj-view-all');
viewAllBtn.addEventListener('click', () => {
    // Replace with your actual GitHub projects page URL
    window.open('https://github.com/yourusername?tab=repositories', '_blank');
});