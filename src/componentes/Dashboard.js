import fetchs from '../utils/fetchs';
import Listado from './Listado';
import Transaccion from './Transaccion';
import Cargando from './Cargando';
import funciones from '../utils/funciones';
import Monto from './Monto';
import Graficos from './Graficos';

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
      console.log('sin api ni user');
      navigate('/');
    } else {
      fetchs.monedas().then((m) => {
        dispatch(cargarMonedas(m.monedas));
      });
      fetchs
        .transacciones(storage.id)
        .then((t) => {
          dispatch(cargarTransacciones(t.transacciones));
        })
        .then((t) => setCarga(false));
    }
  }, [carga]);

  const recargarPag = () => {
    setCarga(true);
  };
  if (carga) {
    return <Cargando />;
  }
  return (
    <div className="">
      <button onClick={recargarPag}>Recargar valores de monedas</button>
      <div className="row mt-3">
        <Transaccion sendMessage={sendMessage} />
        <Listado />
      </div>
      <Graficos sendMessage={sendMessage} />
    </div>
  );
};

export default Dashboard;
