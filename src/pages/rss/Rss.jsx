
import { useEffect, useState } from 'react';

const Rss = () => {
  const [rssContent, setRssContent] = useState('');

  useEffect(() => {
    // Cargar el contenido del archivo XML RSS al montar la página
    fetch('../../public/rss/feed.xml')
      .then(response => response.text())
      .then(data => {
        // Guardar el contenido XML en el estado
        setRssContent(data);
      })
      .catch(error => {
        console.error('Error al cargar el archivo RSS:', error);
      });
  }, []);

  return (
    <div>
      <h1>RSS de FlickZone</h1>
      <pre>{rssContent}</pre>
    </div>
  );
};

export default Rss;
