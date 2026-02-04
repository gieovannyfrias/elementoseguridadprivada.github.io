// footer.js

const footerHTML = `
<footer>
  <div class="footer-container">
    
    <!-- Columna izquierda -->
    <div class="footer-left">
      <h3>GuardiaSegura</h3>
      <p>&copy; 2026 Elemento Seguridad Privada. Todos los derechos reservados.</p>
      <p>📍 Av. Seguridad #123, Ciudad de México</p>
      <p>📞 Tel: +52 55 1234 5678</p>
      <p>✉️ contacto@elementoseguridadprivada.com</p>
    </div>
    
    <!-- Columna centro -->
    <div class="footer-center">
      <h4>Enlaces rápidos</h4>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#equipo">Equipo</a></li>
        <li><a href="#certificaciones">Certificaciones</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </div>
    
    <!-- Columna derecha -->
    <div class="footer-right">
      <h4>Síguenos</h4>
      <div class="social-icons">
        <a href="https://facebook.com/elementoseguridadprivada" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" aria-label="TikTok">
          <i class="fab fa-tiktok"></i>
        </a>
        <a href="https://twitter.com/elementosegurid" target="_blank" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com/@elementoseguridadprivada" target="_blank" aria-label="YouTube">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>

  <!-- Aviso legal -->
  <div class="footer-bottom">
    <p><a href="documentacion-proyecto/docs/legales/Politicas_de_privacidad.pdf">Politica de privacidad</a> | <a href="documentacion-proyecto/docs/legales/Termino_condiciones.pdf">Términos y condiciones</a> | <a href="documentacion-proyecto/docs/legales/politica_cookies.pdf">Políticas de cookies</a></p>
    <p>Horario de atención: Lunes a Sabado - 24 horas</p>
  </div>
</footer>
`;

// Insertar el footer al final del body
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  // Inyectar CSS del footer
  const style = document.createElement("style");
  style.textContent = `
    footer {
      position: relative;
      background: #111;
      color: #fff;
      padding: 2rem 1rem;
    }
    .footer-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .footer-left, .footer-center, .footer-right {
      flex: 1;
      min-width: 200px;
      margin: 1rem;
    }
    .footer-center ul {
      list-style: none;
      padding: 0;
    }
    .footer-center ul li {
      margin: 6px 0;
    }
    .footer-center a {
      color: #f1c40f;
      text-decoration: none;
      position: relative;
    }
    .footer-center a:hover {
      text-decoration: underline;
    }
    .footer-center a::after { 
      content: ""; position: absolute; left: 0; bottom: -2px; width: 0%; height: 2px; background: #f1c40f; transition: width 0.3s; 
    }
    .footer-center a:hover::after { width: 100%; }

    .social-icons {
      display: flex;
      gap: 1rem;
      justify-content: space-evenly;
    }
    .social-icons a {
      color: #aaa;
      font-size: 1.5rem;
      transition: color 0.3s, transform 0.3s;
    }
    .social-icons a:hover {
      color: #f1c40f;
      transform: rotate(10deg) scale(1.2);
    }

    .footer-bottom {
      text-align: center;
      margin-top: 1rem;
      font-size: 0.9rem;
      border-top: 1px solid #333;
      padding-top: 1rem;
    }
    .footer-bottom a {
      color: #f1c40f;
      text-decoration: none;
    }
    .footer-bottom a:hover {
      text-decoration: underline;
    }

    @media(max-width:768px){
      .footer-container { flex-direction: column; text-align: center; gap:1rem; }
    }
  `;
  document.head.appendChild(style);

  // JS opcional: ejemplo de interacción
  const links = document.querySelectorAll(".footer-center a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log("Navegando a:", link.getAttribute("href"));
    });
  });
});
