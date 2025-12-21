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