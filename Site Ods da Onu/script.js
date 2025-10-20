const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const localStorageKey = 'theme-mode';

const savedTheme = localStorage.getItem(localStorageKey);

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Salva a preferência no Local Storage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem(localStorageKey, 'dark');
    } else {
        localStorage.removeItem(localStorageKey);
    }
});

     // NOVO: Toggle para o Dropdown de Tópicos
     const topicosBtn = document.getElementById('topicos-btn');
     const topicosDropdown = document.getElementById('topicos-dropdown');
     if (topicosBtn && topicosDropdown) {
         topicosBtn.addEventListener('click', function() {
             const isActive = topicosDropdown.classList.contains('active');
             topicosDropdown.classList.toggle('active');
             topicosBtn.classList.toggle('active', !isActive); // Adiciona classe para rotacionar ícone
         });
         // Fecha o dropdown ao clicar fora
         document.addEventListener('click', function(e) {
             if (!topicosBtn.contains(e.target) && !topicosDropdown.contains(e.target)) {
                 topicosDropdown.classList.remove('active');
                 topicosBtn.classList.remove('active');
             }
         });
     }
     // Scroll suave para links do dropdown (integra com o existente da navbar)
     document.querySelectorAll('.dropdown-menu a').forEach(link => {
         link.addEventListener('click', function(e) {
             e.preventDefault();
             const targetId = this.getAttribute('href').substring(1);
             const targetSection = document.getElementById(targetId);
             if (targetSection) {
                 targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
             }
             // Fecha o dropdown após clique
             topicosDropdown.classList.remove('active');
             topicosBtn.classList.remove('active');
         })})



