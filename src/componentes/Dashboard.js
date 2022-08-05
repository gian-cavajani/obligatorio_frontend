import fetchs from '../utils/fetchs';
import Listado from './Listado';
import Transaccion from './Transaccion';
import Cargando from './Cargando';
import funciones from '../utils/funciones';
import Graficos from './Graficos';
import CerrarSesion from './CerrarSesion';
import Nav from './Nav';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cargarMonedas } from '../features/monedasSlice';
import { cargarTransacciones } from '../features/transaccionesSlice';

const Dashboard = ({ sendMessage }) => {
  const [carga, setCarga] = useState(true);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const storage = funciones.getStorage();
    if (!storage.key || !storage.id) {
      navigate('/');
    } else {
      //fetch monedas y carga al store
      fetchs
        .monedas()
        .then((m) => {
          dispatch(cargarMonedas(m.monedas));
        })
        .catch((e) => {
          sendMessage(
            'error',
            'error en la carga de la pagina, logueese de nuevo'
          );
          navigate('/');
        });
      //fetch transacciones y carga al store
      fetchs
        .transacciones(storage.id)
        .then((t) => {
          dispatch(cargarTransacciones(t.transacciones));
        })
        .then((t) => setCarga(false))
        .catch((e) => {
          sendMessage(
            'error',
            'error en la carga de la pagina, logueese de nuevo'
          );
          navigate('/');
        });
    }
  }, [carga]);

  const recargarPag = () => {
    setCarga(true);
  };

  if (carga) {
    return <Cargando />;
  }

  return (
    <section>
      <Nav onClick={recargarPag} brand="Obligatorio Gianluca Cavajani" />
      <article className="container">
        <div className="row mt-3 ">
          <Transaccion sendMessage={sendMessage} />
          <Listado />
        </div>
        <Graficos sendMessage={sendMessage} />
      </article>
      <Nav brand="Obligatorio Gianluca Cavajani" />
    </section>
  );
};

export default Dashboard;
