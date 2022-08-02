import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Listado = () => {
  const trans = useSelector((state) => state.transacciones.transacciones);
  const monedas = useSelector((state) => state.monedas.monedas);

  const nombreMoneda = (id) => {
    const mone = monedas.filter((m) => m.id == id);
    if (!mone[0]) {
      return 'Comodin';
    }
    return mone[0].nombre;
  };

  if (trans.length > 0 && monedas.length > 0) {
    return (
      <div>
        <h2>Listado de transacciones hechas por usted: </h2>
        <table>
          <tr>
            <th>Moneda</th>
            <th>Tipo</th>
            <th>Cantidad</th>
            <th>Valor en ese momento</th>
          </tr>
          {trans.map((t) => (
            <tr key={t.id}>
              <td>{nombreMoneda(t.moneda)}</td>
              <td>{t.tipo_operacion == 1 ? 'Compra' : 'Venta'}</td>
              <td>{t.cantidad}</td>
              <td>${t.valor_actual} </td>
            </tr>
          ))}
        </table>
      </div>
    );
  } else {
    <h1>...cargando</h1>;
  }
};

export default Listado;
