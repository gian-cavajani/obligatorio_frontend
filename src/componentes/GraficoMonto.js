import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraficoMonto = ({
  montos,
  titulo,
  monedas,
  color1,
  color2,
  inversion,
}) => {
  const { dineroVentas2, dineroCompras2 } = montos;
  return (
    <div className="card">
      <div className="card-body">
        <Bar
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
          }}
          data={{
            labels: monedas.map((m) => m.nombre),
            datasets: [
              {
                label: 'Ventas',
                data: Object.values(dineroVentas2),
                backgroundColor: color1 + ',0.6)',
              },
              {
                label: 'Compras',
                data: Object.values(dineroCompras2),
                backgroundColor: color2 + ',0.6)',
              },
            ],
          }}
        />
      </div>
      <div className="card-footer">
        <h5 className="card-title">{titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{inversion}</h6>
      </div>
    </div>
  );
};

export default GraficoMonto;
