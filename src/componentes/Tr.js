import funciones from '../utils/funciones';

const Tr = ({ t, monedas }) => {
  return (
    <tr key={t.id}>
      <td>{funciones.nombreMonedaTr(t.moneda, monedas)}</td>
      <td>{t.tipo_operacion == 1 ? 'Compra' : 'Venta'}</td>
      <td>{t.cantidad}</td>
      <td>${t.valor_actual} </td>
      <td>${t.valor_actual * t.cantidad}</td>
    </tr>
  );
};

export default Tr;
