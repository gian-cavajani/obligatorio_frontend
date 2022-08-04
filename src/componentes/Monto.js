import { useSelector } from 'react-redux';
import funciones from '../utils/funciones';
import MontoPorMoneda from './MontoPorMoneda';

const Monto = () => {
  const trans = useSelector((state) => state.transacciones.transacciones);
  const monedas = useSelector((state) => state.monedas.monedas);

  const monto = funciones.calcularMontoTotal(trans);
  return (
    <div>
      <h2>Monto total invertido hasta el momento: </h2>
      <MontoPorMoneda monto={monto} />
    </div>
  );
};

export default Monto;
