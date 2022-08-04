import fetchs from '../utils/fetchs';
import funciones from '../utils/funciones';

import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { sumarTransaccion } from '../features/transaccionesSlice';
import { InputGroup } from 'react-bootstrap';

const Transaccion = ({ sendMessage }) => {
  const dispatch = useDispatch();
  const monedas = useSelector((state) => state.monedas.monedas);
  const trans = useSelector((state) => state.transacciones.transacciones);
  const moneda = useRef(null);
  const cant = useRef(null);

  const handleNuevaTrans = async (tipo) => {
    const monedaId = moneda.current.value;
    const quan = cant.current.value;
    if (monedaId && quan) {
      const laMoneda = funciones.buscarMoneda(monedaId, monedas);
      const transaccion = {
        idUsuario: localStorage.getItem('usuarioId'),
        tipoOperacion: tipo,
        moneda: monedaId,
        cantidad: quan,
        valorActual: laMoneda.cotizacion,
      };
      try {
        if (tipo === 1) {
          if (funciones.iaCompra(trans, transaccion)) {
            if (
              !window.confirm(
                `La ultima vez que compro esta moneda su precio era menor, recomendamos vender, Seguro que quiere comprar?`
              )
            ) {
              return null;
            }
          }
        } else {
          console.log(funciones.iaVenta(trans, transaccion));
          if (funciones.iaVenta(trans, transaccion)) {
            if (
              !window.confirm(
                `La ultima vez que vendio esta moneda su precio era mayor, recomendamos comprar, Seguro que quiere vender?`
              )
            ) {
              return null;
            }
          }
        }

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
    <div className="card col-3 mx-3 p-0">
      <div className="card-header ">
        <h5 className="card-title">Nueva transaccion: </h5>
      </div>
      <div className="card-body">
        <label>
          Elija una moneda:
          <select defaultValue="" ref={moneda} className="form-control px-4">
            <option disabled value="">
              Monedas
            </option>
            {monedas.map((m) => (
              <option value={m.id} key={m.id}>
                {m.nombre} - ${m.cotizacion}
              </option>
            ))}
          </select>
        </label>
        <div className="form-group mt-3">
          <label className="input-field">
            Cantidad:
            <input className="form-control" type="number" ref={cant} min="1" />
          </label>
          <div className="mt-4">
            <input
              className="btn btn-danger mx-2"
              type="button"
              value="comprar"
              onClick={() => {
                handleNuevaTrans(1);
              }}
            />
            <input
              className="btn btn-primary mx-2"
              type="button"
              value="vender"
              onClick={() => {
                handleNuevaTrans(2);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaccion;
