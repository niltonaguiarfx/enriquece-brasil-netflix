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
        description: "O primeiro passo fundamental para reprogramar sua mente para a riqueza. Elisiane Moreira revela como identificar e eliminar os bloqueios que impedem sua prosperidade.",
        progress: 33,
        status: "Parabéns! Você iniciou sua jornada. A Aula 1 foi concluída e o processamento da sua mentalidade de elite começou."
    },
    2: {
        title: "CPL 02: O Mapa da Riqueza",
        description: "Nesta aula prática, você aprenderá as estratégias de investimento e o caminho exato para construir seu patrimônio de forma sólida e segura.",
        progress: 66,
        status: "Excelente progresso! Com a Aula 2 concluída, o Mapa da Riqueza foi integrado ao seu sistema. Você está pronto para investir."
    },
    3: {
        title: "CPL 03: Aceleração Máxima",
        description: "A aula final da jornada. Descubra como escalar seus ganhos e atingir a liberdade financeira em tempo recorde através da execução de elite.",
        progress: 100,
        status: "SISTEMA COMPLETO. Você finalizou as 3 aulas do Enriquece Brasil. Agora o poder da execução de elite está em suas mãos."
    }
};

function playVideo(videoId, aulaId) {
    const aula = aulas[aulaId];
    
    // Configurar o vídeo do YouTube
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    
    // Configurar informações no modal
    modalTitle.innerText = aula.title;
    modalDescription.innerText = aula.description;
    
    // Mostrar modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Impedir scroll

    // Atualizar situação
    updateStatus(aulaId);
}

function closeModal() {
    modal.style.display = "none";
    videoFrame.src = ""; // Parar o vídeo
    document.body.style.overflow = "auto"; // Restaurar scroll
}

function updateStatus(aulaId) {
    const aula = aulas[aulaId];
    
    // Atualizar barra de progresso
    progressBar.style.width = aula.progress + "%";
    progressPercent.innerText = aula.progress + "%";
    
    // Atualizar texto de situação
    statusText.innerText = aula.status;
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Efeito de scroll no header
window.onscroll = function() {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 50) {
        header.style.backgroundColor = "rgba(5, 5, 5, 0.95)";
    } else {
        header.style.backgroundColor = "transparent";
    }
};
