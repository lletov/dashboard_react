import React from 'react'
import { Chart as ChartJS,
  BarElement,
  DoughnutController,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  DoughnutController,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)


export default function Round() {
  const data = {
    labels: [
      'Moscow',
      'St Petersburg',
      'Kazan'
    ],
    datasets: [{
      data: [58, 33, 9],
      backgroundColor: [
        'rgb(60, 219, 105)',
        'rgb(226, 186, 84)',
        'rgb(226, 84, 152)'
      
      ],
      radius: '80%',
      cutout: '80%',
      borderWidth: 0,
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: '#fff'
        }
      }
    },
  }

  return (
    <div className='card' style={{width: '430px', height: '430px'}}>
        <h2>Distribution</h2>
        <p>Buildings amount distributions by cities</p>
        <div className='circle-content'>
        <Doughnut
                style = {{width: '100%'}}
                data = {data}
                options={options}
                 >
              </Doughnut>
        </div>
    </div>
  )
}
