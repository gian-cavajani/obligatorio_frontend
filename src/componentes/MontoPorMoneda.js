import React from 'react';

const MontoPorMoneda = ({ monto, nombreMoneda }) => {
  const { nombre, img } = nombreMoneda;
  return (
    <div className="card-footer ">
      <div className="">
        <h5 className="card-title mb-2 ">
          Inversion total con {nombre}:
          <img className="img-fluid" src={img} alt="" />$
          {monto.ventas - monto.compras}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Gastado en compras: ${monto.compras}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">
          Recibido de ventas: ${monto.ventas}
        </h6>
      </div>
    </div>
  );
};

export default MontoPorMoneda;
