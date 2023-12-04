import React from 'react'

export default function Heatmaps() {
  return (
    <div className='card' style={{width: '750px', height: '430px'}}>
        <h2>Heatmaps</h2>
        <p>By year of construction and by buildings height heatmaps </p>
        <div className='heatmaps-content'>
          <div>
            <div>By year</div>
            <div  className='heatmaps-row'>
              <a href='https://github.com/lletov/buildings_analysis/blob/main/heatmaps/moscow_heatmap_year.html' target='_blank'><button>Moscow</button></a>
              <a href='https://github.com/lletov/buildings_analysis/blob/main/heatmaps/spb_heatmap_year.html' target='_blank'><button>St. Petersburg</button></a>
              <a href='https://github.com/lletov/buildings_analysis/blob/main/heatmaps/kazan_heatmap_year.html' target='_blank'><button>Kazan</button></a>
            </div>
          </div>
          <div>
            <div>By height</div>
            <div  className='heatmaps-row'>
              <a href='https://github.com/lletov/buildings_analysis/blob/main/heatmaps/moscow_heatmap_height.html' target='_blank'><button>Moscow</button></a>
              <a href='https://github.com/lletov/buildings_analysis/blob/main/heatmaps/spb_heatmap_height.html' target='_blank'><button>St. Petersburg</button></a>
              <a href='https://github.com/lletov/buildings_analysis/blob/main/heatmaps/kazan_heatmap_height.html' target='_blank'><button>Kazan</button></a>
            </div>
          </div>
        </div>
    </div>
  )
}
