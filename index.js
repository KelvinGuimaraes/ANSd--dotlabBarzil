const cards = document.querySelectorAll(".cards-container > div");

cards.forEach((cardClicado) => {
  cardClicado.addEventListener("click", () => {
    const jaEstaAtivo = cardClicado.classList.contains("ativo");

    cards.forEach((card) => {
      card.classList.remove("ativo");
      card.classList.add("cards");
      
      const paragrafos = card.querySelectorAll("p");
      paragrafos.forEach(p => p.classList.add("esconder"));
    });

    if (!jaEstaAtivo) {
      cardClicado.classList.remove("cards");
      cardClicado.classList.add("ativo");
      
      const paragrafosAtivos = cardClicado.querySelectorAll("p");
      paragrafosAtivos.forEach(p => p.classList.remove("esconder"));
    }
  });
});

// MENU RESPONSIVO
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navbar = document.querySelector('.nav-container');

    // Toggle menu ao clicar no botão
    menuButton.addEventListener('click', function() {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', !isExpanded);
        navbar.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-container a').forEach(link => {
        link.addEventListener('click', () => {
            menuButton.setAttribute('aria-expanded', 'false');
            navbar.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInside = navbar.contains(event.target) || menuButton.contains(event.target);
        
        if (!isClickInside && navbar.classList.contains('active')) {
            menuButton.setAttribute('aria-expanded', 'false');
            navbar.classList.remove('active');
        }
    });
});