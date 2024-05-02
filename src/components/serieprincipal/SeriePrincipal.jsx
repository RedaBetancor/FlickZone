import "./SeriePrincipal.css";

function SeriePrincipal() {
  return (
    <>
      <div className="series">
        <h2 id="title">Series dramáticas</h2>
        <div className="img-box">
          <span>
            Peaky bliders
            <img src="../../public/fotos/peakyblinders.png" alt="peaky"></img>
          </span>
          <span>
            Stranger Things
            <img src="../../public/fotos/strangerthings.png" alt="stranger"></img>
          </span>
          <span>
            The Boys
            <img src="../../public/fotos/theboys.png" alt="theboys"></img>
          </span>
          <span>
            The Walking Dead
            <img src="../../public/fotos/thewalkingdead.png" alt="twd"></img>
          </span>
        </div>

        <h2>Series de Anime</h2>
        <div className="img-box">
          <span>
            One Piece
            <img src="../../public/fotos/onepiece.png" alt="onepiece"></img>
          </span>
          <span>
            Jujutsu Kaisen
            <img src="../../public/fotos/jujutsukaisen.jpg" alt="jujutsu"></img>
          </span>
          <span>
            Demon Slayer
            <img src="../../public/fotos/kny.png" alt="KnY"></img>
          </span>
          <span>
            Attack on Titan
            <img src="../../public/fotos/snk.png" alt="snk"></img>
          </span>
        </div>

        <h2>Series de Humor</h2>
        <div className="img-box">
          <span>
            Aqui no hay quien viva
            <img src="../../public/fotos/aquinohayquienviva.png" alt="anhqv"></img>
          </span>
          <span>
            Aida
            <img src="../../public/fotos/aida.png" alt="aida"></img>
          </span>
          <span>
            The Office
            <img src="../../public/fotos/theoffice.png" alt="theoffice"></img>
          </span>
          <span>
            La que se avecina
            <img src="../../public/fotos/lqsa.png" alt="lqsa"></img>
          </span>
        </div>
      </div>
    </>
  );
}

export default SeriePrincipal;
