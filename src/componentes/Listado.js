import { useSelector } from 'react-redux';
import Tr from './Tr';

const Listado = () => {
  const trans = useSelector((state) => state.transacciones.transacciones);
  const monedas = useSelector((state) => state.monedas.monedas);

  if (trans.length > 0 && monedas.length > 0) {
    return (
      <div className="card p-0 col-8">
        <div className="card-header">
          <h4 className="card-title">
            Listado de transacciones hechas por usted:{' '}
          </h4>
        </div>
        <div id="growth">
          <table className="table table-striped table-bordered table-responsive">
            <thead className="thead-light">
              <tr>
                <th>Moneda</th>
                <th>Tipo</th>
                <th>Cantidad</th>
                <th>Valor en ese momento</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {trans.map((t) => (
                <Tr key={t.id} t={t} monedas={monedas} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return <h2>No tiene transacciones realizadas</h2>;
  }
};
export default Listado;
