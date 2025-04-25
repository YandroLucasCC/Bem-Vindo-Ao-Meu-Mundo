function showSection(section) {
    // Remove a classe active de todas as seções
    const sections = document.querySelectorAll('.tela');
    sections.forEach(sec => {
        sec.classList.remove('active');
    });
    
    // Adiciona a classe active à seção selecionada
    const sectionToShow = document.getElementById(section);
    sectionToShow.classList.add('active');
}
