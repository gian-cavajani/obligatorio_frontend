import fetchs from '../utils/fetchs';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { sumarTransaccion } from '../features/transaccionesSlice';

const Transaccion = ({ sendMessage }) => {
  const dispatch = useDispatch();
  const monedas = useSelector((state) => state.monedas.monedas);
  const moneda = useRef(null);
  const cant = useRef(null);

  const buscarMoneda = (id) => {
    console.log('id', id);
    const actual = monedas.filter((m) => m.id == id);
    return actual[0];
  };

  const handleNuevaTrans = async (tipo) => {
    const monedaId = moneda.current.value;
    const quan = cant.current.value;
    if (monedaId && quan) {
      const laMoneda = buscarMoneda(monedaId);
      const transaccion = {
        idUsuario: localStorage.getItem('usuarioId'),
        tipoOperacion: tipo,
        moneda: monedaId,
        cantidad: quan,
        valorActual: laMoneda.cotizacion,
      };
      try {
        const tran = await fetchs.nuevaTrans(transaccion);

        transaccion.valor_actual = transaccion.valorActual; 
        delete transaccion.valorActual;
        transaccion.tipo_operacion = transaccion.tipoOperacion;
        delete transaccion.tipoOperacion;

        dispatch(sumarTransaccion(transaccion));

        sendMessage('ok', tran.mensaje);
      } catch (error) {
        sendMessage('error', error.mensaje);
      }
    } else {
      sendMessage('error', 'Campos no pueden estar vacios');
    }
  };

  return (
    <div>
      <h2>Nueva transaccion: </h2>
      <select defaultValue="" ref={moneda}>
        <option disabled value="">
          Elija una moneda
        </option>
        {monedas.map((m) => (
          <option value={m.id} key={m.id}>
            {m.nombre} - ${m.cotizacion}
          </option>
        ))}
      </select>
      <div>
        <label>
          Cantidad:
          <input type="number" ref={cant} min="1" />
        </label>

        <input
          type="button"
          value="comprar"
          onClick={() => {
            handleNuevaTrans(1);
          }}
        />
        <input
          type="button"
          value="vender"
          onClick={() => {
            handleNuevaTrans(2);
          }}
        />
      </div>
      {/* <h3>monedas:</h3>
      <ul>
        {monedas.map((m) => (
          <li key={m.id}>
            {m.nombre} - cotizacion: ${m.cotizacion} UYs
          </li>
        ))}
      </ul>
      <input type="button" onClick={handleNuevaTrans} value="nuevaTrans" />
     */}
    </div>
  );
};

export default Transaccion;
