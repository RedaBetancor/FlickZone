import React, { useState, useEffect } from "react";
import "./Principal.css";

function Principal() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 8);
  };

  return (
    <>
			<div className="name">
				<h1>Mira las mejores peliculas y serie en Stream</h1>
				<p>Tenemos grandes exitos como Batman Begins, Breaking Bad o Kong vs Godzilla.</p>
			</div>
      <div className="container">
        <div className="slider">
          <div
            className="slides"
            style={{ transform: `translateX(-${currentSlide * 50}%)` }}
          >
            <img src="../../public/fotos/kongVsGodzilla.png" alt="img1" />

            <img src="../../public/fotos/batmanBegin.png" alt="img2" />

            <img src="../../public/fotos/breakingBad.png" alt="img3" />

            <img src="../../public/fotos/avengerendgame.png" alt="img4" />

            <img src="../../public/fotos/frozen.png" alt="img5" />

            <img src="../../public/fotos/harrypotter.png" alt="img6" />

            <img src="../../public/fotos/lordofrings.png" alt="img7" />

            <img src="../../public/fotos/twd.png" alt="img8" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Principal;
