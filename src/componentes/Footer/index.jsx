//Estilos
import "./footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.linkedin.com/in/andree-drago/">
          <img src="/img/linkedin.png" alt="Facebook" />
        </a>
        <a href="https://github.com/AndreeDrago">
          <img src="/img/Guithub.png" alt="twitter" />
        </a>
        <a href="https://www.instagram.com/larte.del.drago/">
          <img src="/img/instagram.png" alt="instagram" />
        </a>
      </div>
      <img src="/img/Logo.png" alt="org" />
      <strong>Desarrollado por Andree Barrios Cisneros Castillo</strong>
    </footer>
  );
};

export default Footer;
