import React from 'react'
import { useState } from 'react'
import { Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
)

export default function Plots() {

  const [activeTab, setActiveTab] = useState(0)

  const changeTab = (i) => {
    setActiveTab(i)
  }

  const labels = ['1901', '1916', '1932', '1947', '1962', '1977', '1992', '2007', '2019']

  const tab_1_data = {
    labels: labels,
    datasets: [{
      label: 'Moscow',
      data: [0, 2000, 2200, 3000, 10000, 13000, 22000, 25000, 28500, 31000],
      backgroundColor: 'rgb(60, 219, 105)',
      borderColor: 'rgb(60, 219, 105)',
      pointBorderColor: 'rgb(60, 219, 105)',
      borderWidth: 1 
    },
    {
      label: 'St. Petersburg',
      data: [0, 3000, 3200, 4100, 7000, 10500, 12000, 12800, 13800],
      backgroundColor: 'rgb(226, 186, 84)',
      borderColor: 'rgb(226, 186, 84)',
      pointBorderColor: 'rgb(226, 186, 84)',
      borderWidth: 1 
    },
    {
      label: 'Kazan',
      data: [0, 400, 500, 600, 2000, 3700, 4000, 4800, 5500],
      backgroundColor: 'rgb(226, 84, 152)',
      borderColor: 'rgb(226, 84, 152)',
      pointBorderColor: 'rgb(226, 84, 152)',
      borderWidth: 1 
    }]
    };

  const tab_2_data = {
    labels: labels,
    datasets: [{
      label: 'Moscow',
      data: [10, 370, 80, 40, 1280, 410, 170, 300, 100],
      backgroundColor: 'rgb(60, 219, 105)',
      borderColor: 'rgb(60, 219, 105)',
      pointBorderColor: 'rgb(60, 219, 105)',
      borderWidth: 1 
    },
    {
      label: 'St. Petersburg',
      data: [180, 760, 70, 20, 200, 290, 100, 95, 160, 80],
      backgroundColor: 'rgb(226, 186, 84)',
      borderColor: 'rgb(226, 186, 84)',
      pointBorderColor: 'rgb(226, 186, 84)',
      borderWidth: 1 
    },
    {
      label: 'Kazan',
      data: [0, 40, 10, 15, 180, 75, 60, 90, 30],
      backgroundColor: 'rgb(226, 84, 152)',
      borderColor: 'rgb(226, 84, 152)',
      pointBorderColor: 'rgb(226, 84, 152)',
      borderWidth: 1 
    }]
    };

  const tab_3_data = {
    labels: labels,
    datasets: [{
      label: 'Moscow',
      data: [0.1, 0.5, 0.2, 0.1, 4.3, 3.8, 1.9, 4.5, 1.3],
      backgroundColor: 'rgb(60, 219, 105)',
      borderColor: 'rgb(60, 219, 105)',
      pointBorderColor: 'rgb(60, 219, 105)',
      borderWidth: 1 
    },
    {
      label: 'St. Petersburg',
      data: [0.3, 1.2, 1.07, 0, 2.4, 1, 0.8, 1.9, 0.9],
      backgroundColor: 'rgb(226, 186, 84)',
      borderColor: 'rgb(226, 186, 84)',
      pointBorderColor: 'rgb(226, 186, 84)',
      borderWidth: 1 
    },
    {
      label: 'Kazan',
      data: [0, 0.05, 0, 0, 0.3, 0.4, 0.4, 0.45, 0.38],
      backgroundColor: 'rgb(226, 84, 152)',
      borderColor: 'rgb(226, 84, 152)',
      pointBorderColor: 'rgb(226, 84, 152)',
      borderWidth: 1 
    }]
    };
  
  const tab_4_data = {
    labels: labels,
    datasets: [{
      label: 'Moscow',
      data: [5, 6, 6, 4, 6, 13, 16, 18, 19],
      backgroundColor: 'rgb(60, 219, 105)',
      borderColor: 'rgb(60, 219, 105)',
      pointBorderColor: 'rgb(60, 219, 105)',
      borderWidth: 1,
      color: 'white'
    },
    {
      label: 'St. Petersburg',
      data: [5, 4, 5, 3, 5, 12, 12, 14, 18],
      backgroundColor: 'rgb(226, 186, 84)',
      borderColor: 'rgb(226, 186, 84)',
      pointBorderColor: 'rgb(226, 186, 84)',
      borderWidth: 1 
    },
    {
      label: 'Kazan',
      data: [4, 3, 3, 2, 4, 8, 9, 10, 17],
      backgroundColor: 'rgb(226, 84, 152)',
      borderColor: 'rgb(226, 84, 152)',
      pointBorderColor: 'rgb(226, 84, 152)',
      borderWidth: 1 
    }]
    };

    const options = {
      maintainAspectRatio: false,
      plugins: {
          legend: {
            labels: {
              color: '#fff'
            }
          }
        },
      scales: {
        x: {
          grid: {
            color: 'rgb(135, 135, 135)'
          },
          ticks: {
            color: '#fff'
          }
        },
        y: {
          grid: {
            color: 'rgb(135, 135, 135)'
          },
          ticks: {
            color: '#fff'
          }

        }
      }
    }

  return (
    <div className='card' style={{width: '1200px', height: '430px'}}>
        <h2>Graphs</h2>
        <p>Statistic graphs</p>
        <div className='tab-content'>
          <div className='tab-buttons'>
            <div className={activeTab === 0 ? 'tab-btn active-btn' : 'tab-btn'} onClick={() => changeTab(0)}>Total buildings amount</div>
            <div className={activeTab === 1 ? 'tab-btn active-btn' : 'tab-btn'} onClick={() => changeTab(1)}>New buildings amount</div>
            <div className={activeTab === 2 ? 'tab-btn active-btn' : 'tab-btn'} onClick={() => changeTab(2)}>Built square meters amount</div>
            <div className={activeTab === 3 ? 'tab-btn active-btn' : 'tab-btn'} onClick={() => changeTab(3)}>Buildigs average height</div>
          </div>
          <div className='tabs'>
            <div className={activeTab === 0 ? 'tab active-tab' : 'tab'}>
            <Line
                data = {tab_1_data}
                options = {options} />
            </div>
            <div className={activeTab === 1 ? 'tab active-tab' : 'tab'}>
              <Line
                data = {tab_2_data}
                options = {options} />
            </div>
            <div className={activeTab === 2 ? 'tab active-tab' : 'tab'}>
              <Line
                data = {tab_3_data}
                options = {options} />
            </div>
            <div className={activeTab === 3 ? 'tab active-tab' : 'tab'}>
              <Line
                data = {tab_4_data}
                options = {options} />
            </div>
          </div>
        </div>
    </div>
  )
}
