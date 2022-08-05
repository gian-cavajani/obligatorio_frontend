import { useNavigate } from 'react-router-dom';

const CerrarSesion = () => {
  let navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <article>
      <button className="btn text-danger" onClick={cerrarSesion}>
        Cerrrar sesion
      </button>
    </article>
  );
};

export default CerrarSesion;
