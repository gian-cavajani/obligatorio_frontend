import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import CardFooter from './CardFooter';
ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoMontoParcial = ({ montos, titulo, monedas, color, inversion }) => {
  const titulos = monedas.map((m) =>
    Object.keys(montos).includes(String(m.id)) ? m.nombre : ''
  );
  const filt = titulos.filter((t) => t != '');

  return (
    <section className="card shadow rounded">
      <article className="card-body">
        <Doughnut
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
          }}
          data={{
            labels: filt,
            datasets: [
              {
                data: Object.values(montos),
                borderColor: color + ',1)',
                backgroundColor: color + ',0.2)',
              },
            ],
          }}
        />
      </article>
      <CardFooter title={titulo} subtitle={`$${inversion}`} />
    </section>
  );
};

export default GraficoMontoParcial;
