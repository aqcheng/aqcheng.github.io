document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('progress');
    const fadeElement = document.querySelector('.fade-on-scroll');
    const body = document.body;
    const html = document.documentElement;

    window.addEventListener('scroll', () => {
        // Calculate total scrollable height
        const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        ) - window.innerHeight;
        
        // Calculate current scroll position
        const position = window.scrollY;
        
        // Update progress bar
        progressBar.value = (position / height) * 100;
        
        // Update opacity only if fade element exists (home page)
        if (fadeElement) {
            const scrollPercent = (position / height) * 100;
            const opacity = scrollPercent >= 36 ? 1 : 0;
            fadeElement.style.opacity = opacity;
        }
    });
});

