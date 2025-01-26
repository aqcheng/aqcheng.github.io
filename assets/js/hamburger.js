function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
}

// Close the menu if clicking outside of it
document.addEventListener('click', function(event) {
    const menu = document.getElementById('sideMenu');
    const hamburger = document.querySelector('.hamburger');

    // Check if the clicked element is not the menu or the hamburger icon
    if (menu.classList.contains('active') && !menu.contains(event.target) && !hamburger.contains(event.target)) {
        toggleMenu(); // Close the menu
    }
});