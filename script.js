const modal = document.getElementById("videoModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const progressBar = document.getElementById("progress-bar");
const statusText = document.getElementById("status-text");

const lessons = {
    1: {
        title: "Aula 1: Mentalidade Prospera",
        description: "Nesta aula, exploramos como reprogramar sua mente para identificar oportunidades de riqueza e eliminar crenças limitantes sobre o dinheiro.",
        progress: 33
    },
    2: {
        title: "Aula 2: O Caminho da Riqueza",
        description: "Aprenda as estratégias práticas de investimento e gestão financeira que os grandes nomes do mercado utilizam para multiplicar patrimônio.",
        progress: 66
    },
    3: {
        title: "Aula 3: Acelerando Resultados",
        description: "O passo final para a sua liberdade. Como escalar seus ganhos e dominar as ferramentas de execução para atingir seus objetivos em tempo recorde.",
        progress: 100
    }
};

function openModal(lessonId) {
    const lesson = lessons[lessonId];
    modalTitle.innerText = lesson.title;
    modalDescription.innerText = lesson.description;
    modal.style.display = "block";
    
    // Atualizar situação/progresso
    updateStatus(lessonId);
}

function closeModal() {
    modal.style.display = "none";
}

function updateStatus(lessonId) {
    const lesson = lessons[lessonId];
    progressBar.style.width = lesson.progress + "%";
    
    if (lessonId === 1) {
        statusText.innerText = "Parabéns! Você iniciou sua jornada. A Aula 1 foi concluída e você está no caminho certo.";
    } else if (lessonId === 2) {
        statusText.innerText = "Excelente progresso! Com a Aula 2 concluída, você já possui as ferramentas necessárias para investir com inteligência.";
    } else if (lessonId === 3) {
        statusText.innerText = "Jornada Completa! Você finalizou as 3 aulas do Enriquece Brasil. Agora é hora de colocar tudo em prática e dominar o mercado.";
    }
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
        header.style.backgroundColor = "#141414";
    } else {
        header.style.backgroundColor = "transparent";
    }
};
