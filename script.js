document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let hintShown = false;

/* Toggle card expansion on project image click */
document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.card');
        const project = this.closest('.project');
        const expandable = card.querySelector('.card-expandable');
        
        if (expandable) {
            expandable.classList.toggle('expanded');
            project.classList.toggle('expanded-card');
        }
        
        /* Remove hint after first click anywhere */
        if (!hintShown) {
            document.querySelectorAll('.click-hint').forEach(hint => {
                hint.style.animation = 'none';
                hint.style.opacity = '0';
                hint.style.transition = 'opacity 0.3s ease';
                setTimeout(() => hint.remove(), 300);
            });
            hintShown = true;
        }
    });
});
