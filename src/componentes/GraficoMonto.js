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
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
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
    <section className="card shadow rounded">
      <article className="card-body">
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
      </article>
      <CardFooter title={titulo} subtitle={`$${inversion}`} />
    </section>
  );
};

export default GraficoMonto;
