// Ajoute des animations et des fonctionnalités interactives

// Animation pour la section Hero
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Animation pour les projets
const projets = document.querySelectorAll('.projet');
projets.forEach(projet => {
  projet.addEventListener('mouseenter', () => {
    projet.style.transform = 'translateY(-10px)';
    projet.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  });
  projet.addEventListener('mouseleave', () => {
    projet.style.transform = 'translateY(0)';
    projet.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  });
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche l'envoi du formulaire
  alert('Merci pour votre message ! Je vous répondrai dès que possible.');
  contactForm.reset(); // Réinitialise le formulaire
});

// Ajoute un effet de défilement fluide pour les liens de navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});