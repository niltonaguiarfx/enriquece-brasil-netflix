const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const progressFill = document.getElementById("progress-fill");
const progressPercent = document.getElementById("progress-percent");
const situationText = document.getElementById("situation-text");

const aulas = {
    1: {
        title: "CPL 01: A Mentalidade de Elite",
        desc: "O primeiro passo fundamental para reprogramar sua mente para a riqueza. Elisiane Moreira revela como identificar e eliminar os bloqueios que impedem sua prosperidade.",
        progress: 33,
        status: "Parabéns! O processamento da sua mentalidade foi iniciado. Você desbloqueou o primeiro nível de consciência financeira."
    },
    2: {
        title: "CPL 02: O Mapa da Riqueza",
        desc: "Nesta aula prática, você aprenderá as estratégias de investimento e o caminho exato para construir seu patrimônio de forma sólida e segura.",
        progress: 66,
        status: "Excelente! O Mapa da Riqueza foi integrado ao seu sistema. Você agora possui as ferramentas táticas para multiplicar capital."
    },
    3: {
        title: "CPL 03: Aceleração Máxima",
        desc: "A aula final da jornada. Descubra como escalar seus ganhos e atingir a liberdade financeira em tempo recorde através da execução de elite.",
        progress: 100,
        status: "SISTEMA COMPLETO. Você finalizou o treinamento de elite Enriquece Brasil. Agora o poder da execução está em suas mãos."
    }
};

function playVideo(videoId, aulaId) {
    const aula = aulas[aulaId];
    
    // Configurar o vídeo do YouTube
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    
    // Configurar informações no modal
    modalTitle.innerText = aula.title;
    modalDesc.innerText = aula.desc;
    
    // Mostrar modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Impedir scroll

    // Atualizar situação
    updateSituation(aulaId);
}

function closeModal() {
    modal.style.display = "none";
    videoFrame.src = ""; // Parar o vídeo
    document.body.style.overflow = "auto"; // Restaurar scroll
}

function updateSituation(aulaId) {
    const aula = aulas[aulaId];
    
    // Animando a barra de progresso
    progressFill.style.width = aula.progress + "%";
    progressPercent.innerText = aula.progress + "%";
    
    // Atualizando o texto de situação
    situationText.innerText = aula.status;

    // Atualizando o status na grade de aulas
    document.getElementById(`status-${aulaId}`).innerText = "CONCLUÍDO";
    document.getElementById(`status-${aulaId}`).style.color = "var(--accent)";
}

function scrollToAulas() {
    document.getElementById('aulas').scrollIntoView({ behavior: 'smooth' });
}

// Fechar modal ao clicar fora ou na tecla ESC
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
});

// Efeito de scroll no header
window.onscroll = function() {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 50) {
        header.style.background = "rgba(5, 5, 5, 0.95)";
        header.style.padding = "15px 5%";
    } else {
        header.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)";
        header.style.padding = "25px 5%";
    }
};
