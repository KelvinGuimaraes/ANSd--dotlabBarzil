const cards = document.querySelectorAll(".cards-container > div");

cards.forEach((cardClicado) => {
  cardClicado.addEventListener("click", () => {
    const jaEstaAtivo = cardClicado.classList.contains("ativo");

    cards.forEach((card) => {
      card.classList.remove("ativo");
      card.classList.add("cards");

      const paragrafos = card.querySelectorAll("p");
      paragrafos.forEach((p) => p.classList.add("esconder"));
    });

    if (!jaEstaAtivo) {
      cardClicado.classList.remove("cards");
      cardClicado.classList.add("ativo");

      const paragrafosAtivos = cardClicado.querySelectorAll("p");
      paragrafosAtivos.forEach((p) => p.classList.remove("esconder"));
    }
  });
});

// ===== CARROSSEL =====
const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let index = 0;

function getImagesPerView() {
  return window.innerWidth < 1000 ? 1 : 2;
}

function getImageWidth() {
  const img = images[0];
  const gap = parseInt(getComputedStyle(slide).gap) || 0;
  return img.clientWidth + gap;
}

function getMaxIndex() {
  return Math.max(0, images.length - getImagesPerView());
}

function updateCarousel() {
  const imageWidth = getImageWidth();
  const maxIndex = getMaxIndex();
  if (index > maxIndex) index = maxIndex;
  if (index < 0) index = 0;
  slide.style.transform = `translateX(-${index * imageWidth}px)`;
}

next.addEventListener("click", () => {
  const imagesPerView = getImagesPerView();
  const maxIndex = getMaxIndex();

  if (index < maxIndex) {
    index += imagesPerView;
    if (index > maxIndex) index = maxIndex;
  } else {
    // chegou no fim -> voltar ao primeiro (loop)
    index = 0;
  }

  updateCarousel();
});

prev.addEventListener("click", () => {
  const imagesPerView = getImagesPerView();

  const maxIndex = getMaxIndex();

  if (index > 0) {
    index -= imagesPerView;
    if (index < 0) index = 0;
  } else {
    // no início -> pular para o último (loop)
    index = maxIndex;
  }

  updateCarousel();
});

window.addEventListener("resize", () => {
  index = 0; // reseta ao trocar de breakpoint
  updateCarousel();
});


// MENU RESPONSIVO
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const navbar = document.querySelector(".nav-container");

  // Toggle menu ao clicar no botão
  menuButton.addEventListener("click", function () {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
    navbar.classList.toggle("active");
  });

  // Fechar menu ao clicar em um link
  document.querySelectorAll(".nav-container a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      navbar.classList.remove("active");
    });
  });

  // Fechar menu ao clicar fora
  document.addEventListener("click", function (event) {
    const isClickInside =
      navbar.contains(event.target) || menuButton.contains(event.target);

    if (!isClickInside && navbar.classList.contains("active")) {
      menuButton.setAttribute("aria-expanded", "false");
      navbar.classList.remove("active");
    }
  });
});

// Botões - envolvidos em DOMContentLoaded para garantir que o DOM está pronto
document.addEventListener("DOMContentLoaded", function () {
  const btnSaibamais = document.getElementById("btnSaibamais");
  if (btnSaibamais) {
    btnSaibamais.addEventListener("click", function () {
      window.location.href = "#";
    });
  }

  const btnpreview = document.getElementById("btnpreview");
  if (btnpreview) {
    btnpreview.addEventListener("click", function () {
      const modal = document.getElementById("modalContato");
      if (modal) {
        modal.showModal();
      }
    });
  }

  const btnhansenai = document.getElementById("btnhansenai");
  if (btnhansenai) {
    btnhansenai.addEventListener("click", function () {
      window.open("https://hansen.dotlabbrazil.com.br/", "_blank");
    });
  }

  const btndotlab = document.getElementById("btndotlab");
  if (btndotlab) {
    btndotlab.addEventListener("click", function () {
      window.open("https://dotlabbrazil.com.br/", "_blank");
    });
  }

  const btnVerhansen = document.getElementById("btnVerhansen");
  if (btnVerhansen) {
    btnVerhansen.addEventListener("click", function () {
      window.open("https://hansen.dotlabbrazil.com.br/", "_blank");
    });
  }

  const btnSolicite = document.getElementById("btnSolicite");
  if (btnSolicite) {
    btnSolicite.addEventListener("click", function () {
      const modal = document.getElementById("modalContato");
      if (modal) {
        modal.showModal();
      }
    });
  }

  const btnDemo = document.getElementById("btnDemo");
  if (btnDemo) {
    btnDemo.addEventListener("click", function (e) {
      e.preventDefault();
      const modal = document.getElementById("modalContato");
      if (modal) {
        modal.showModal();
      }
    });
  }

  // --- Modal Contato ---

  const closeModal = document.getElementById("closeModal");
  if (closeModal) {
    closeModal.addEventListener("click", function () {
      const modal = document.getElementById("modalContato");
      if (modal) {
        modal.close();
      }
    });
  }
  function showModalMessage(message, type = "success", autoHide = true) {
    const msgEl = document.getElementById("modalMessage");
    if (!msgEl) return;
    msgEl.textContent = message;
    msgEl.className = "modal-message show " + (type === "success" ? "success" : "error");
    if (autoHide) {
      clearTimeout(msgEl._hideTimeout);
      msgEl._hideTimeout = setTimeout(() => {
        msgEl.className = "modal-message";
      }, 4000);
    }
  }

  const submitModal = document.getElementById("submitModal");
  if (submitModal) {
    submitModal.addEventListener("click", function (e) {
      e.preventDefault();
      const form = document.querySelector("#modalContato form");
      if (form && form.checkValidity()) {
        showModalMessage("Formulário enviado com sucesso!", "success", false);
        // Aqui você pode adicionar a lógica real de envio (fetch/XHR)
        setTimeout(() => {
          form.reset();
          const modal = document.getElementById("modalContato");
          if (modal) modal.close();
          const msgEl = document.getElementById("modalMessage");
          if (msgEl) msgEl.className = "modal-message";
        }, 1200);
      } else {
        showModalMessage("Por favor, preencha todos os campos obrigatórios.", "error");
      }
    });
  }
});
