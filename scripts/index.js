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

    document.addEventListener('DOMContentLoaded', function() {
            const footerInner = document.querySelector('.footer-inner');
            let ticking = false;
            let hasAnimated = false;

            // Use Intersection Observer for better performance
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !hasAnimated) {
                        entry.target.classList.add('animate');
                        hasAnimated = true;
                        // Stop observing after animation
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px 0px'
            });

            // Start observing the footer
            observer.observe(footerInner);

            // Optimized scroll handler (throttled)
            function handleScroll() {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        // Any additional scroll-based logic can go here
                        ticking = false;
                    });
                    ticking = true;
                }
            }

            // Use passive event listener for better performance
            window.addEventListener('scroll', handleScroll, { passive: true });

            // Add click handlers for interactive elements
            document.querySelector('.cta-button').addEventListener('click', function() {
                // Add your CTA logic here
                console.log('Get Started clicked');
            });

            // Add click handlers for social links
            document.querySelectorAll('.socials a').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const icon = this.querySelector('i');
                    if (icon.classList.contains('fa-twitter')) {
                        console.log('Twitter clicked');
                    } else if (icon.classList.contains('fa-linkedin')) {
                        console.log('LinkedIn clicked');
                    } else if (icon.classList.contains('fa-github')) {
                        console.log('GitHub clicked');
                    } else if (icon.classList.contains('fa-instagram')) {
                        console.log('Instagram clicked');
                    }
                });
            });
        });

    