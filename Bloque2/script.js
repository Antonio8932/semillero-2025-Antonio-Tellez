let currentLang = localStorage.getItem("lang") || 
                 (navigator.language.startsWith("en") ? "en" : "es");

const langBtn = document.getElementById("langBtn");
const elements = document.querySelectorAll("[data-es]");

function applyLanguage(lang) {
    elements.forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.textContent = el.getAttribute(`data-${lang}`);
            el.style.opacity = 1;
        }, 200);
    });

    langBtn.textContent = lang === "es" ? "🇲🇽" : "🇺🇸";
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
}

langBtn.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    applyLanguage(currentLang);
});

/* Scroll animation */
const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => observer.observe(section));

applyLanguage(currentLang);
/* =========================
   ANIMACIÓN DE BARRAS DE HABILIDADES
========================= */
window.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = value;
        }, 300);
    });
});