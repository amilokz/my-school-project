// Only run animations on the home page
if(document.body.classList.contains('home')) {

  // Navbar shadow on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // Smooth scroll for buttons
  document.querySelectorAll('.buttons a').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if(targetSection){
        targetSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = targetId; // fallback for external pages
      }
    });
  });

  // Fade-in animation on scroll
  const fadeElements = document.querySelectorAll('.page-content, .cards .card');
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
  });

  window.addEventListener('scroll', () => {
    fadeElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if(top < windowHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'all 1s ease-out';
      }
    });
  });

  // Typing effect for welcome text
  const welcomeText = document.querySelector('.welcome-text h1');
  if(welcomeText){
    const text = welcomeText.textContent;
    welcomeText.textContent = '';
    let i = 0;
    function typeEffect() {
      if(i < text.length){
        welcomeText.textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
      }
    }
    typeEffect();
  }
}
