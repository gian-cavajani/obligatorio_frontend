import fetchs from '../utils/fetchs';
import Listado from './Listado';
import Transaccion from './Transaccion';
import Cargando from './Cargando';
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
    const apiKey = localStorage.getItem('usuarioKey');
    const userId = localStorage.getItem('usuarioId'); //873
    if (apiKey && userId) {
      const fetchData = async () => {
        try {
          const monedas = await fetchs.monedas();
          const transacciones = await fetchs.transacciones(userId);
          dispatch(cargarMonedas(monedas.monedas));
          dispatch(cargarTransacciones(transacciones.transacciones));
          setCarga(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    } else {
      navigate('/login');
    }
  }, []);

  const handleMonedas = async () => {};
  const handleTransacciones = async () => {
    const trans = await fetchs.transacciones(873);
    console.log(trans);
  };

  if (carga) {
    return <Cargando />;
  }
  return (
    <div>
      Dashboard
      <Transaccion sendMessage={sendMessage} />
      <Listado />
    </div>
  );
};

export default Dashboard;
