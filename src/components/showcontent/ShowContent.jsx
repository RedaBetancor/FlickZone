
import "./ShowContent.css";

const ShowContent = ({ title, data }) => {
  return (
    <div >
      <h1 className="serie-title">Series de {title}</h1>
      <div className="serie-container">
        {data &&
          data.map((serie, index) => (
            <div key={index} className="serie-item">
              <img src={`/fotos/${serie.img}`} alt={serie.name} />
              <p>{serie.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowContent;
