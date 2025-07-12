// Skeleton loading handler
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // If image is already loaded
            if (img.complete) {
                img.parentElement.classList.add('loaded');
            }
            
            // When image loads
            img.addEventListener('load', function() {
                img.parentElement.classList.add('loaded');
            });
            
            // If image fails to load
            img.addEventListener('error', function() {
                img.parentElement.classList.add('loaded');
                img.style.display = 'none';
            });
        });
    });