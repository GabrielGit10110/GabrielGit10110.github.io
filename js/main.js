// Alternar entre seções
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        
        // Atualiza classe do body
        document.body.className = sectionId;
        
        // Ativa/desativa seções
        document.querySelectorAll('section').forEach(section => {
            section.classList.toggle('active-section', section.id === sectionId);
        });
    });
});
