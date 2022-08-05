import { useSelector } from 'react-redux';
import funciones from '../utils/funciones';
import GraficoMonto from './GraficoMonto';
import GraficoMontoParcial from './GraficoMontoParcial';
import BuscarMoneda from './BuscarMoneda';
import GraficoTotal from './GraficoTotal';
import Vacio from './Vacio';

const Graficos = ({ sendMessage }) => {
  const trans = useSelector((state) => state.transacciones.transacciones);
  const monedas = useSelector((state) => state.monedas.monedas);

  const dineroCompras = funciones.montoPorMoneda(trans, 1);
  const dineroVentas = funciones.montoPorMoneda(trans, 2);

  const { compras, ventas } = funciones.calcularMontoTotal(trans);
  const dineroCompras2 = funciones.montoPorMoneda2(trans, 1);
  const dineroVentas2 = funciones.montoPorMoneda2(trans, 2);

  if (compras === 0 && ventas === 0) {
    return <div></div>;
  }

  const clase = 'col-4 my-4';
  return (
    <section className="row">
      {compras > 0 ? (
        <article className={clase}>
          <GraficoMontoParcial
            titulo="Montos comprados por moneda"
            montos={dineroCompras}
            monedas={monedas}
            inversion={compras}
            color={'rgba(255, 99, 132'}
          />
        </article>
      ) : (
        <article className="d-none"></article>
      )}
      {ventas > 0 ? (
        <article className={clase}>
          <GraficoMontoParcial
            titulo="Montos vendidos por moneda"
            montos={dineroVentas}
            monedas={monedas}
            inversion={ventas}
            color={'rgba(75, 192, 192'}
          />
        </article>
      ) : (
        <Vacio />
      )}
      <article className={clase}>
        <GraficoTotal inversion={{ ventas, compras }} />
      </article>
      {trans.length > 0 ? (
        <article className="col-12">
          <GraficoMonto
            titulo="Inversion Total"
            montos={{ dineroVentas2, dineroCompras2 }}
            monedas={monedas}
            inversion={ventas - compras}
            trans={trans}
            color2={'rgba(255, 99, 132'}
            color1={'rgba(75, 192, 192'}
          />
        </article>
      ) : (
        <Vacio />
      )}
      <article className="col-12 mb-4">
        <BuscarMoneda
          monedas={monedas}
          trans={trans}
          sendMessage={sendMessage}
          className="col-8 "
        />
      </article>
    </section>
  );
};

export default Graficos;
