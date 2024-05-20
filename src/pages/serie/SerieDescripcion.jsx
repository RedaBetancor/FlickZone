import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SeriesServices from '../../services/SeriesServices';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./SerieDescripcion.css";

function SerieDescripcion() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    const fetchSerie = async () => {
      try {
        const response = await SeriesServices.getAllSeries();
        const series = response.val();
        const serieData = series["anime"][id]; 
        setSerie(serieData);
      } catch (error) {
        console.error("Error fetching series:", error);
      }
    };

    fetchSerie();
  }, [id]);

  if (!serie) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Header />
      <div className="serie-descripcion-container">
        <img src={`/fotos/${serie.img}`} alt={serie.name} />
        <h1>{serie.name}</h1>
        <p>{serie.descripcion}</p> 
      </div>
      <Footer />
    </>
  );
}

export default SerieDescripcion;
