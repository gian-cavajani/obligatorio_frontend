import React from 'react';

const MontoPorMoneda = ({ monto, nombreMoneda }) => {
  return (
    <div className="card-footer">
      <h5 className="card-title mb-2 ">
        Inversion total con {nombreMoneda}: ${monto.ventas - monto.compras}
      </h5>
      <h6 className="card-subtitle mb-2 text-muted">
        Gastado en compras: ${monto.compras}
      </h6>
      <h6 className="card-subtitle mb-2 text-muted">
        Recibido de ventas: ${monto.ventas}
      </h6>
    </div>
  );
};

export default MontoPorMoneda;
