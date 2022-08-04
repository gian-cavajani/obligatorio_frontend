import { useSelector } from 'react-redux';
import funciones from '../utils/funciones';
import GraficoMonto from './GraficoMonto';
import GraficoMonto2 from './GraficoMonto2';
import BuscarMoneda from './BuscarMoneda';
import GraficoTotal from './GraficoTotal';

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
    <div className="row">
      {compras > 0 ? (
        <div className={clase}>
          <GraficoMonto2
            titulo="Compras por Moneda"
            montos={dineroCompras}
            monedas={monedas}
            inversion={compras}
            color={'rgba(255, 99, 132'}
          />
        </div>
      ) : (
        <div className="d-none"></div>
      )}
      {ventas > 0 ? (
        <div className={clase}>
          <GraficoMonto2
            titulo="Ventas por Moneda"
            montos={dineroVentas}
            monedas={monedas}
            inversion={ventas}
            color={'rgba(75, 192, 192'}
          />
        </div>
      ) : (
        <div className="d-none"></div>
      )}
      <div className={clase}>
        <GraficoTotal inversion={{ ventas, compras }} />
      </div>
      {trans.length > 0 ? (
        <div className="col-12">
          <GraficoMonto
            titulo="Inversion Total"
            montos={{ dineroVentas2, dineroCompras2 }}
            monedas={monedas}
            inversion={ventas - compras}
            trans={trans}
            color2={'rgba(255, 99, 132'}
            color1={'rgba(75, 192, 192'}
          />
        </div>
      ) : (
        <div className="d-none"></div>
      )}
      <div className="col-12">
        <BuscarMoneda
          monedas={monedas}
          trans={trans}
          sendMessage={sendMessage}
          className="col-8 "
        />
      </div>
    </div>
  );
};

export default Graficos;
