import "./SeriesList.css";
import { useEffect, useState } from "react";
import { getSeries, deleteSeries } from "../../services/FirebaseUtils";
import UpdateSeries from "./UpdateSeries";

const SeriesList = () => {
  const [series, setSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);

  useEffect(() => {
    const fetchSeries = async () => {
      const seriesData = await getSeries();
      setSeries(seriesData);
    };

    fetchSeries();
  }, []);

  const handleDelete = async (id) => {
    await deleteSeries(id);
    setSeries(series.filter((serie) => serie.id !== id));
  };

  const handleUpdate = () => {
    const fetchSeries = async () => {
      const seriesData = await getSeries();
      setSeries(seriesData);
    };

    fetchSeries();
  };

  return (
    <div className="series-list-container">
      <h1>Mi Lista</h1>
      <div className="series-list">
        {series.map((serie) => (
          <div key={serie.id} className="serie-item">
            <p>{serie.name}</p>
            <img src={`/fotos/${serie.img}`} alt={serie.name} />
            <div className="buttons">
              <button onClick={() => setSelectedSeries(serie)}>Editar</button>
              <button onClick={() => handleDelete(serie.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      {selectedSeries && (
        <UpdateSeries
          serie={selectedSeries}
          onClose={() => setSelectedSeries(null)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default SeriesList;
