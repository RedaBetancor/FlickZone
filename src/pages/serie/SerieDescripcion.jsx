import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SeriesServices from "../../services/SeriesServices";
import "./SerieDescripcion.css";

function SerieDescripcion() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    const fetchSerie = async () => {
      const series = await SeriesServices.getAllSeries();
      const serieData = series[id];
      setSerie(serieData);
    };

    fetchSerie();
  }, [id]);

  if (!serie) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="serie-descripcion-container">
      <img src={`/fotos/${serie.img}`} alt={serie.name} />
      <h1>{serie.name}</h1>
      <p>{serie.description}</p>{" "}
    </div>
  );
}

export default SerieDescripcion;
