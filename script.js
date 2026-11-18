
// BASCULE ENTRE MODE CLAIR ET SOMBRE


const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Récupérer le thème enregistré
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    document.body.classList.toggle("dark", savedTheme === "dark");
} else {
    document.body.classList.toggle(
        "dark",
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
}

// Mettre à jour l'icône
function updateThemeIcon() {
    themeIcon.textContent = document.body.classList.contains("dark")
        ? "🌙"
        : "☀️";
}

updateThemeIcon();

// Changer de thème
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const currentTheme = document.body.classList.contains("dark")
        ? "dark"
        : "light";

    localStorage.setItem("theme", currentTheme);

    updateThemeIcon();
});

// ANIMATION D'APPARITION AU SCROLL


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
});

// BOUTONS DES PRODUITS

document.querySelectorAll(".buy-btn").forEach((button) => {
    button.addEventListener("click", () => {
        const productName = button.closest(".product-card")
            .querySelector("h2").textContent;

        alert("Vous avez sélectionné : " + productName);
    });
});
