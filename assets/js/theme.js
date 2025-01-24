document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    // Set initial theme - default is dark 
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-regular fa-sun';
    } else {
        // Remove any theme attribute to default to dark
        document.documentElement.removeAttribute('data-theme');
        themeIcon.className = 'fa-solid fa-moon';
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const isLight = document.documentElement.hasAttribute('data-theme');
        
        if (isLight) {
            // Switch to dark mode
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
            themeIcon.className = 'fa-solid fa-moon';
        } else {
            // Switch to light mode
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.className = 'fa-regular fa-sun';
        }
    });
}); 