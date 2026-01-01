// 1. MENU MOBILE (BURGER)
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animation des liens
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}
navSlide();

// 2. FAQ ACCORDION
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');
    
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false');
    }
    
    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// 3. COMPTE À REBOURS (COUNTDOWN)
// Date cible : 23 Mars 2026 (Exemple)
const countDownDate = new Date("Mar 23, 2026 15:00:00").getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Calculs de temps
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Affichage
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;

    // Si le compte à rebours est fini
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "C'EST LE JOUR J !";
    }
}, 1000);

// 4. GESTION DU FORMULAIRE D'INSCRIPTION
const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    // Récupération des données (Simulation)
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;

    // Ici, vous devriez envoyer ces données à une base de données (PHP/Firebase)
    // Pour la démo, on affiche une alerte
    
    if(nom && email && country) {
        alert("Félicitations " + nom + " ! \nVotre pré-inscription est validée.\nVous recevrez un email de confirmation prochainement.");
        form.reset();
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});