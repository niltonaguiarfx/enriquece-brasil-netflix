const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const progressBar = document.getElementById("progress-bar");
const progressPercent = document.getElementById("progress-percent");
const statusText = document.getElementById("status-text");

const aulas = {
    1: {
        title: "CPL 01: A Mentalidade de Elite",
        description: "O protocolo inicial para reprogramar sua mentalidade. Elisiane Moreira revela as chaves da Aliança da Riqueza para destravar sua prosperidade.",
        progress: 33,
        status: "PROTOCOLO INICIADO: Sua mentalidade está sendo recalibrada para o nível de elite. Continue para a próxima fase do Mapa."
    },
    2: {
        title: "CPL 02: O Mapa da Riqueza",
        description: "A arquitetura prática do enriquecimento. Aprenda como estruturar seus investimentos e finanças para uma liberdade duradoura.",
        progress: 66,
        status: "SISTEMA INTEGRADO: O Mapa da Riqueza foi carregado com sucesso. Você agora possui as coordenadas exatas para a prosperidade."
    },
    3: {
        title: "CPL 03: Aceleração Máxima",
        description: "A execução final. Descubra como escalar seus resultados e consolidar sua Aliança da Riqueza com estratégias de alto impacto.",
        progress: 100,
        status: "ALIANÇA CONSOLIDADA: Você completou o ciclo de treinamento Enriquece Brasil. O sistema de prosperidade está 100% operacional."
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

    // Atualizar Dashboard
    updateDashboard(aulaId);
}

function closeModal() {
    modal.style.display = "none";
    videoFrame.src = ""; 
    document.body.style.overflow = "auto";
}

function updateDashboard(aulaId) {
    const aula = aulas[aulaId];
    
    // Animação suave da barra de progresso
    setTimeout(() => {
        progressBar.style.width = aula.progress + "%";
        progressPercent.innerText = aula.progress + "%";
    }, 100);
    
    // Atualizar texto de status com efeito de digitação simples ou troca imediata
    statusText.style.opacity = 0;
    setTimeout(() => {
        statusText.innerText = aula.status;
        statusText.style.opacity = 1;
        statusText.style.transition = "opacity 0.5s";
    }, 500);
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
        header.style.padding = "10px 4%";
    } else {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.95)";
        header.style.padding = "15px 4%";
    }
};
