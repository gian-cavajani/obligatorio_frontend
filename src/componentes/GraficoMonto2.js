import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
const GraficoMonto2 = ({ montos, titulo, monedas, color, inversion }) => {
  const titulos = monedas.map((m) =>
    Object.keys(montos).includes(String(m.id)) ? m.nombre : ''
  );
  const filt = titulos.filter((t) => t != '');

  return (
    <div className="card ">
    <div className='card-body'>
      
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
    </div>
      <div className="card-footer">
        <h5 className="card-title">{titulo}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${inversion}</h6>
      </div>
    </div>
  );
};

export default GraficoMonto2;
