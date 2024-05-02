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

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3);
  };

  return (
    <>
			<div className="name">
				<h1>Mira las mejores peliculas y serie en Stream</h1>
				<p>Tenemos grandes exitos como Batman Begins, Breaking Bad o Kong vs Godzilla. ¿Te lo vas a perder?</p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Principal;
