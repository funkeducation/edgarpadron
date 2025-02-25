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

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#portfolio img:not(.no-expand)");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const modalCaption = document.getElementById("modalCaption");
  const closeBtn = document.querySelector(".close");

  images.forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;

      // Capturar el ALT y limpiarlo de cualquier nodo <br>
      let captionText = this.alt;

      // Crear un elemento temporal para manejar cualquier contenido interpretado como HTML
      let tempElement = document.createElement("div");
      tempElement.innerHTML = captionText;

      // Reemplazar cualquier <br> dentro del alt por un espacio
      tempElement.querySelectorAll("br").forEach(br => br.replaceWith(" "));

      modalCaption.textContent = tempElement.textContent.trim().toUpperCase(); // Convertir a mayúsculas
      modalCaption.style.display = modalCaption.textContent ? "block" : "none";

      // Desactivar el scroll solo si la resolución es mayor a 1000px
      if (window.innerWidth > 1000) {
        document.body.style.overflow = "hidden";
      }

      // Si la imagen es la de Agencia Digitals, cargar otra imagen en el modal
      if (this.id === "digitals-img") {
        modalImg.src = "../images/digitals02.jpg"; // Reemplaza con la ruta de la imagen alternativa
      } else {
        modalImg.src = this.src;
      }
    });
  });

  // Cerrar el modal al hacer clic en la 'X'
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Reactivar el scroll
  });

  // Cerrar el modal al hacer clic fuera de la imagen
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Reactivar el scroll
    }
  });

  // Cerrar el modal al presionar la tecla ESC
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Reactivar el scroll
    }
  });
});

// Botón "Back to Top"
const mybutton = document.getElementById("btn-back-to-top");

// Aparecer / desaparecer con fade-in y fade-out
window.addEventListener('scroll', function () {
  if (document.body.scrollTop > 780 || document.documentElement.scrollTop > 780) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
});

// Evento click para ir arriba
mybutton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
