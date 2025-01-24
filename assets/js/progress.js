document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('progress');
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
    });
});

