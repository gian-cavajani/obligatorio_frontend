import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoTotal = ({ inversion }) => {
  const { compras, ventas } = inversion;
  return (
    <div className="card">
      <div className='card-body'>
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
      </div>
      <div className="card-footer">
        <h5 className="card-title">Inversion total: ${ventas - compras}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Ventas ${ventas} | Compras -${compras}
        </h6>
      </div>
    </div>
  );
};

export default GraficoTotal;
