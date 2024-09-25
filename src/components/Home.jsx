import { Link } from 'react-router-dom';

const Home = () => {
  const regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; 

  return (
    <div>
      <h1>Bienvenido a la Aplicación de Países</h1>
      <p>Selecciona una región para listar los países correspondientes.</p>
      <ul>
        {regiones.map(region => (
          <li key={region}>
            <Link to={`/${region.toLowerCase()}`}>{region}</Link>
          </li>
        ))}
      </ul>
    </div>
  );x 
};

export default Home;
