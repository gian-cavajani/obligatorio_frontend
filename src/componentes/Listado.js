import { useSelector } from 'react-redux';
import CardHeader from './CardHeader';
import Tr from './Tr';

const Listado = () => {
  const trans = useSelector((state) => state.transacciones.transacciones);
  const monedas = useSelector((state) => state.monedas.monedas);

  return (
    <section className="card p-0 col-8  shadow rounded">
      {trans.length > 0 && monedas.length > 0 ? (
        <div>
          <CardHeader title="Listado de transacciones hechas por usted:" />
          <article id="growth">
            <table className="table table-striped table-bordered table-responsive ">
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
          </article>
        </div>
      ) : (
        <CardHeader title="No tiene transacciones realizadas " />
      )}
    </section>
  );
};
export default Listado;
