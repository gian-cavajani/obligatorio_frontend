const getStorage = () => {
  const id = localStorage.getItem('usuarioId');
  const key = localStorage.getItem('usuarioKey');
  return { id, key };
};

const setStorage = (id, key) => {
  localStorage.setItem('usuarioId', id);
  localStorage.setItem('usuarioKey', key);
};

const buscarUltimaTrans = (transacciones, tipoMoneda, tipoOp) => {
  const transMoneda = transacciones.filter(
    (t) => t.moneda == tipoMoneda && t.tipo_operacion == tipoOp
  );
  const ultimaTrans = transMoneda[transMoneda.length - 1];
  return ultimaTrans;
};

const iaVenta = (transacciones, nuevaTrans) => {
  const ultimaTrans = buscarUltimaTrans(
    transacciones,
    nuevaTrans.moneda,
    nuevaTrans.tipoOperacion
  );

  if (ultimaTrans && ultimaTrans.valor_actual > nuevaTrans.valorActual) {
    return true;
  }
  return false;
};

const iaCompra = (transacciones, nuevaTrans) => {
  const ultimaTrans = buscarUltimaTrans(
    transacciones,
    nuevaTrans.moneda,
    nuevaTrans.tipoOperacion
  );

  if (ultimaTrans && ultimaTrans.valor_actual < nuevaTrans.valorActual) {
    return true;
  }
  return false;
};

const buscarMoneda = (id, monedas) => {
  const actual = monedas.filter((m) => m.id == id);
  return actual[0];
};
const nombreMonedaTr = (id, monedas) => {
  const mone = monedas.filter((m) => m.id == id);
  if (!mone[0]) {
    return 'Comodin';
  }
  return mone[0].nombre;
};
const calcularMontoTotal = (trans) => {
  let compras = 0;
  let ventas = 0;
  trans.map((t) =>
    t.tipo_operacion === 1
      ? (compras += parseInt(t.valor_actual) * t.cantidad)
      : (ventas += parseInt(t.valor_actual) * t.cantidad)
  );

  return { compras, ventas };
};
const montoPorMoneda = (trans, tipo) => {
  const monedas = {};
  trans.map((e) => (e.tipo_operacion == tipo ? (monedas[e.moneda] = 0) : null));
  trans.map((e) =>
    e.tipo_operacion == tipo
      ? (monedas[e.moneda] += parseInt(e.valor_actual) * e.cantidad)
      : null
  );
  delete monedas[0];
  return monedas;
};
const montoPorMoneda2 = (trans, tipo) => {
  const monedas = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  trans.map((e) =>
    e.tipo_operacion == tipo
      ? (monedas[e.moneda] += parseInt(e.valor_actual) * e.cantidad)
      : null
  );
  delete monedas[0];
  return monedas;
};
const nombreMoneda = (id, monedas) => {
  const moneda = buscarMoneda(id, monedas);
  return moneda.nombre;
};

const imgMoneda = (id, monedas) => {
  const moneda = buscarMoneda(id, monedas);
  if (!moneda) {
    return 'Comodin';
  }
  return 'https://crypto.develotion.com/imgs/' + moneda.imagen;
};
const buscarTrans = (moneda, trans) => {
  const arrTrans = trans.filter((t) => t.moneda == moneda);
  return arrTrans;
};
export default {
  getStorage,
  setStorage,
  iaCompra,
  iaVenta,
  buscarMoneda,
  calcularMontoTotal,
  montoPorMoneda,
  montoPorMoneda2,
  nombreMoneda,
  buscarTrans,
  nombreMonedaTr,
  imgMoneda,
};
