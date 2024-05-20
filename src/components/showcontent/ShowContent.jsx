
import { Link } from "react-router-dom";
import "./ShowContent.css";

const ShowContent = ({ title, data, onAddSeries}) => {
  return (
    <div id="series">
      <h1 className="serie-title">Series de {title}</h1>
      <div className="serie-container">
        {data &&
          data.map((serie, index) => (
            <div key={index} className="serie-item">
              <Link to={`/Series/${index}`}>
                <img src={`/fotos/${serie.img}`} alt={serie.name} />
                <p>{serie.name}</p>
              </Link>
              <button onClick={() => onAddSeries(serie)}>Añadir</button>
              {/* <button onClick={() => onRemoveSeries(serie)}>Eliminar</button> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowContent;
