import { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import funciones from '../utils/funciones';
import GraficoMoneda from './GraficoMoneda';
import MontoPorMoneda from './MontoPorMoneda';
import Notification from './Notification';

const BuscarMoneda = ({ trans, monedas, sendMessage, className }) => {
  const [lista, setLista] = useState([]);
  const [nombreMoneda, setNombreMoneda] = useState('');
  const [monto, setMonto] = useState({});
  const moneda = useRef(null);

  useEffect(() => {
    if (lista.length > 0) {
      handleBusqueda();
    }
  }, [trans]);

  const handleBusqueda = () => {
    const id = moneda.current.value;
    setNombreMoneda(funciones.nombreMoneda(id, monedas));
    const listado = funciones.buscarTrans(id, trans);
    setLista(listado);
    if (listado.length === 0) {
      sendMessage('error', 'No existen transacciones con esa moneda');
    }
    setMonto(funciones.calcularMontoTotal(listado));
  };

  return (
    <div className="card mt-4">
      <div className="card-header ">
        <h4 className="card-title">
          Busque sus transacciones con {'  '}
          <select defaultValue="" ref={moneda}>
            <option disabled value="">
              Elija una moneda
            </option>
            {monedas.map((m) => (
              <option value={m.id} key={m.id}>
                {m.nombre}
              </option>
            ))}
          </select>{' '}
          <input type="button" onClick={handleBusqueda} value="Buscar" />
        </h4>
      </div>
      {lista.length > 0 ? (
        <div>
          <GraficoMoneda lista={lista} nombreMoneda={nombreMoneda} />
          <MontoPorMoneda monto={monto} nombreMoneda={nombreMoneda} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BuscarMoneda;
