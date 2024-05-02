import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container-span">
        <div className="column-1">
          <span>Audiodescripción</span>
          <span>Inversores</span>
					
          <span>Avisos legales</span>

          <span>Opciones de anuncios</span>
        </div>

        <div className="column-2">
          <span>Centro de ayuda</span>
          <span>Empleo</span>
          <span>Preferencias de cookies</span>
        </div>

        <div className="column-3">
          <span>Tarjeta regalo</span>
          <span>Términos de uso</span>
          <span>Información corporativa</span>
        </div>

        <div className="column-4">
          <span>Zona de prensa</span>
          <span>Privacidad</span>
          <span>Contáctanos</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
