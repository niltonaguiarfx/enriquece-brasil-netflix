const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const aulas = {
    1: {
        title: "AULA 01",
        description: "A Mentalidade de Elite: O protocolo inicial para reprogramar sua mentalidade e destravar sua prosperidade."
    },
    2: {
        title: "AULA 02",
        description: "O Mapa da Riqueza: A arquitetura prática do enriquecimento e estruturação financeira."
    },
    3: {
        title: "AULA 03",
        description: "Aceleração Máxima: Como escalar seus resultados e consolidar sua Aliança da Riqueza."
    }
};

function playVideo(videoId, aulaId) {
    const aula = aulas[aulaId];
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    modalTitle.innerText = aula.title;
    modalDescription.innerText = aula.description;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    videoFrame.src = ""; 
    document.body.style.overflow = "auto";
}

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
        header.style.background = "rgba(0, 0, 0, 0.98)";
    } else {
        header.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)";
    }
};

// Contador Regressivo
function startCountdown(durationInHours) {
    const countdownElement = document.getElementById('countdown');
    
    // Limpar cache para garantir o novo formato sem 'ID'
    localStorage.removeItem('countDownDate');
    
    let countDownDate = new Date().getTime() + (durationInHours * 60 * 60 * 1000);
    localStorage.setItem('countDownDate', countDownDate);

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // FORMATAÇÃO LIMPA - APENAS OS NÚMEROS
        const timeString = (days > 0 ? days + "d " : "") + 
                         (hours < 10 ? "0" + hours : hours) + ":" + 
                         (minutes < 10 ? "0" + minutes : minutes) + ":" + 
                         (seconds < 10 ? "0" + seconds : seconds);

        countdownElement.textContent = timeString;

        if (distance < 0) {
            clearInterval(x);
            countdownElement.textContent = "EXPIRADO";
        }
    }, 1000);
}

// Inicializar contador
startCountdown(48);

// Revelar elementos ao scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
