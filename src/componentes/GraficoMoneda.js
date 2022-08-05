import React from 'react';
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

const GraficoMoneda = ({ lista, nombreMoneda }) => {
  const labels = lista.map((l) => '');
  return (
    <Bar
      options={{
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {},
      }}
      data={{
        labels,
        datasets: [
          {
            label: nombreMoneda,
            data: lista.map((l) =>
              l.tipo_operacion > 1
                ? l.valor_actual * l.cantidad
                : l.valor_actual * l.cantidad * -1
            ),
            borderColor: 'rgba(153, 102, 255)',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
          },
        ],
      }}>
    </Bar>
  );
};

export default GraficoMoneda;
