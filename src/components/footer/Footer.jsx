
import { Link } from "react-router-dom";
import "./Footer.css"; // Asegúrate de tener este import para aplicar estilos al footer

const Footer = () => {
  return (
    <>
      <div className="container-footer">
        <p>
          © 2023 FLICKZONE Todos los derechos reservados Política de Privacidad
          y Cookies | Condiciones de Venta
        </p>
        <Link to="/rss">
          <span className="material-symbols-outlined">rss_feed</span>
        </Link>
      </div>
    </>
  );
};

export default Footer;
