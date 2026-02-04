const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const aulas = {
    1: {
        title: "CPL 01: A Mentalidade de Elite",
        description: "O protocolo inicial para reprogramar sua mentalidade. Elisiane Moreira revela as chaves da Aliança da Riqueza para destravar sua prosperidade."
    },
    2: {
        title: "CPL 02: O Mapa da Riqueza",
        description: "A arquitetura prática do enriquecimento. Aprenda como estruturar seus investimentos e finanças para uma liberdade duradoura."
    },
    3: {
        title: "CPL 03: Aceleração Máxima",
        description: "A execução final. Descubra como escalar seus resultados e consolidar sua Aliança da Riqueza com estratégias de alto impacto."
    }
};

function playVideo(videoId, aulaId) {
    const aula = aulas[aulaId];
    
    // Configurar o vídeo do YouTube
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    
    // Configurar informações no modal
    modalTitle.innerText = aula.title;
    modalDescription.innerText = aula.description;
    
    // Mostrar modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    videoFrame.src = ""; 
    document.body.style.overflow = "auto";
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Tecla ESC para fechar
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
});

// Efeito de scroll no header
window.onscroll = function() {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.98)";
    } else {
        header.style.backgroundColor = "transparent";
    }
};
