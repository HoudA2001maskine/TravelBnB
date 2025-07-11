window.addEventListener('DOMContentLoaded', () => {
  const rechercheBtn = document.querySelector('#search-btn');
  const recherchebar = document.querySelector('.rechercher_content');
  const formBtn = document.querySelector('#login-btn');
  const loginForm = document.querySelector('.login-form-contenue');
  const formClose = document.querySelector('#form-close');
  const closeBtn = document.querySelector('#close-search');
  const menu = document.querySelector('#menu-bar');
  const navbar = document.querySelector('.navbar');
  const videoBtns = document.querySelectorAll('.vid-btn');
  const videoSlider = document.querySelector('#video-slider');

  // Fermer recherche et menu au scroll
  window.onscroll = () => {
    rechercheBtn.classList.remove('fa-times');
    recherchebar.classList.remove('active');
    navbar.classList.remove('active');
  };

  // Toggle barre de recherche
  rechercheBtn.addEventListener('click', () => {
    rechercheBtn.classList.toggle('fa-times');
    recherchebar.classList.toggle('active');
  });

  // Fermer recherche
  closeBtn.addEventListener('click', () => {
    rechercheBtn.classList.remove('fa-times');
    recherchebar.classList.remove('active');
  });

  // Afficher formulaire de connexion
  formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
  });

  // Fermer formulaire de connexion
  formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
  });

  // Toggle menu responsive
  menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // Contrôle vidéo d'arrière-plan
  videoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.vid-btn.active')?.classList.remove('active');
      btn.classList.add('active');
      const src = btn.getAttribute('data-src');
      videoSlider.src = src;
    });
  });
});

  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlides() {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
    });
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 4000);
  }

  showSlides();

