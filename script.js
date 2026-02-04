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
    
    // Define a data final (exemplo: 48 horas a partir de agora)
    let countDownDate = localStorage.getItem('countDownDate');
    
    if (!countDownDate) {
        countDownDate = new Date().getTime() + (durationInHours * 60 * 60 * 1000);
        localStorage.setItem('countDownDate', countDownDate);
    }

    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // REMOVIDO O PREFIXO ID
        countdownElement.innerHTML = 
            (days > 0 ? days + "d " : "") + 
            (hours < 10 ? "0" + hours : hours) + ":" + 
            (minutes < 10 ? "0" + minutes : minutes) + ":" + 
            (seconds < 10 ? "0" + seconds : seconds);

        if (distance < 0) {
            clearInterval(x);
            countdownElement.innerHTML = "EXPIRADO";
        }
    }, 1000);
}

// Inicializar contador (ex: 48 horas)
startCountdown(48);

// Revelar elementos ao scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
