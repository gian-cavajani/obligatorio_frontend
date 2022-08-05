import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import CardFooter from './CardFooter';
ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoTotal = ({ inversion }) => {
  const { compras, ventas } = inversion;
  return (
    <section className="card shadow rounded">
      <article className="card-body">
        <Pie
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
          }}
          data={{
            labels: ['Compras', 'Ventas'],
            datasets: [
              {
                label: '# of Votes',
                data: [compras, ventas],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)'],
                borderWidth: 1,
              },
            ],
          }}
        />
      </article>
      <CardFooter
        title={`Monto final de inversiones: $${ventas - compras} `}
        subtitle={`Ventas $${ventas} | Compras -$${compras}`}
      />
    </section>
  );
};

export default GraficoTotal;
