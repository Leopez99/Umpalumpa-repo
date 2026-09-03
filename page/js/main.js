// main.js — Interacciones básicas de la página
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");

  // Cambiar sombra del header al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    } else {
      header.style.boxShadow = "none";
    }
  });

  // Smooth scroll para los enlaces del nav
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
