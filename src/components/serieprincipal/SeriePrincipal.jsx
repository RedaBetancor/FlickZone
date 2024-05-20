import { useState, useEffect } from "react";
import "./SeriePrincipal.css";
import SeriesServices from "../../services/SeriesServices";
import ShowContent from "../showcontent/ShowContent";
import { addSeries } from "../../services/FirebaseUtils";

function SeriePrincipal() {
  const [series, setSeries] = useState([]);
  
  const getAllSeries = async () => {
    let auxSeries = {};
    const items = await SeriesServices.getAllSeries();
    items.forEach((item) => {
      const key = item.key;
      const vals = item.val();

      if (!auxSeries[key]) {
        auxSeries[key] = [{}];
      }

      vals.forEach((val, index) => {
        auxSeries[key][index] = {
          name: val.name,
          img: val.img,
        };
      });
    });
    setSeries(auxSeries);
  };

  useEffect(() => {
    getAllSeries();
  }, []);

  const handleAddSeries = async (serie) => {
    await addSeries(serie);
    console.log("Series añadidas:", serie);
  };

  return (
    <>
      <div className="container-serie">
        <section className="serie-container-anime">
          <ShowContent 
            title="Anime" 
            data={series["anime"]}
            onAddSeries={handleAddSeries} 
          />
        </section>
      </div>
    </>
  );
}

export default SeriePrincipal;
