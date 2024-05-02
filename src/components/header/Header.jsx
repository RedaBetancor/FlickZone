import "./Header.css";

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
          <span>Series</span>

          <span>Películas</span>

          <span>Mi lista</span>
        </nav>

        <nav className="second-nav-bar">
          <span class="material-symbols-outlined">search</span>

          <span class="material-symbols-outlined">notifications</span>

					<img src="../../public/fotos/pfp.png" alt="pfp" id="pfp-image"/>
        </nav>
      </header>
    </div>
  );
}

export default Header;
