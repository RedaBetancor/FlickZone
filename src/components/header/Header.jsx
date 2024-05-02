import "./Header.css";
import "../../pages/serie/Serie";
import "../../pages/home/Home";
import "../../pages/movies/Movies";

function Header() {
  return (
    <div>
      <header className="header">
        <img
          src="../../public/fotos/FlickZone.png"
          alt="Logo"
          id="header-logo"
        />

        <nav className="nav-bar">
          <a href="/Home">
            <span>Inicio</span>
          </a>

          <a href="/Series">
            <span>Series</span>
          </a>
        </nav>

        <nav className="second-nav-bar">
          <span class="material-symbols-outlined">search</span>

          <span class="material-symbols-outlined">notifications</span>

          <img src="../../public/fotos/pfp.png" alt="pfp" id="pfp-image" />
        </nav>
      </header>
    </div>
  );
}

export default Header;
