import { useRef, useState, useEffect } from 'react';
import funciones from '../utils/funciones';
import GraficoMoneda from './GraficoMoneda';

const BuscarMoneda = ({ trans, monedas, sendMessage }) => {
  const [lista, setLista] = useState([]);
  const [nombreMoneda, setNombreMoneda] = useState({});
  const [monto, setMonto] = useState({});
  const moneda = useRef(null);

  useEffect(() => {
    if (lista.length > 0) {
      handleBusqueda();
    }
  }, [trans]);

  const handleBusqueda = () => {
    const id = moneda.current.value;
    setNombreMoneda({
      nombre: funciones.nombreMoneda(id, monedas),
      img: funciones.imgMoneda(id, monedas),
    });
    const listado = funciones.buscarTrans(id, trans);
    setLista(listado);
    if (listado.length === 0) {
      sendMessage('error', 'No existen transacciones con esa moneda');
    }
    setMonto(funciones.calcularMontoTotal(listado));
  };

  return (
    <section className="card mt-4 shadow">
      <article className="card-header ">
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
      </article>
      {lista.length > 0 ? (
        <article>
          <GraficoMoneda lista={lista} nombreMoneda={nombreMoneda} />
        </article>
      ) : (
        <article></article>
      )}
    </section>
  );
};

export default BuscarMoneda;
