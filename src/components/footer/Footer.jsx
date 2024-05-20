import "./Footer.css";
import { ReactComponent as RssIcon } from "./rss-icon.svg"; // Importa el icono RSS

function Footer() {
  return (
    <div className="container-footer">
      <p>
        © 2023 FLICKZONE Todos los derechos reservados Política de Privacidad y Cookies | Condiciones de Venta
      </p>
      <a href="URL_DEL_FEED_RSS" target="_blank" rel="noopener noreferrer">
        <RssIcon className="rss-icon" /> 
      </a>
    </div>
  );
}

export default Footer;

