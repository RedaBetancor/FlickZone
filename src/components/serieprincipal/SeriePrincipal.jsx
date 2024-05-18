import { useState, useEffect } from "react";
// import "./SeriePrincipal.css";
import SeriesServices from "../../services/SeriesServices";
import ShowContent from "../showcontent/ShowContent";
import "./SeriePrincipal.css";

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

  return (
    <>
      <div className="container-serie">
        <section className="serie-container-anime">
          <ShowContent title="Anime" data={series["anime"]} />
        </section>

        <section className="serie-container-drama">
          <ShowContent title="Drama" data={series["drama"]} />
        </section>

        <section className="serie-container-humor">
          <ShowContent title="Humor" data={series["humor"]} />
        </section>
      </div>
    </>
  );
}

export default SeriePrincipal;
