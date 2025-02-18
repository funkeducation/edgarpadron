    // Seleccionar el header
    const header = document.getElementById('bottom-header');
    
    // Agregar un evento de scroll
    window.addEventListener('scroll', () => {
      // Verificar si la página ha hecho scroll
      if (window.scrollY > 50) {
        header.classList.add('scrolled'); // Agregar clase cuando se hace scroll
      } else {
        header.classList.remove('scrolled'); // Remover clase cuando se vuelve arriba
      }
    });

    // Seleccionar el nav
    const nav = document.getElementById('navbar-size');
    
    // Agregar un evento de scroll
    window.addEventListener('scroll', () => {
      // Verificar si la página ha hecho scroll
      if (window.scrollY > 50) {
        nav.classList.add('scrolled-nav'); // Agregar clase cuando se hace scroll
      } else {
        nav.classList.remove('scrolled-nav'); // Remover clase cuando se vuelve arriba
      }
    });

  // Espera a que el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los enlaces del menú
    const navLinks = document.querySelectorAll(".nav-link");

    // Agrega un evento de clic a cada enlace
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        // Elimina la clase 'active' de todos los enlaces
        navLinks.forEach(nav => nav.classList.remove("active"));

        // Agrega la clase 'active' al enlace clicado
        this.classList.add("active");
      });
    });
  });

  window.addEventListener('scroll', function () {
    const parallaxDiv = document.querySelector('#effect-bg');
    const scrollPosition = window.pageYOffset; // Posición del scroll
    parallaxDiv.style.backgroundPositionY = `${scrollPosition * 0.05}px`; // Velocidad del parallax
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2000); // El loader durará 2 segundos antes de mostrar el contenido
});
