import React from 'react'

export default function Tools() {
  const tools = ['Python', 
                'Pandas', 
                'Numpy', 
                'Matplotlib', 
                'Seaborn', 
                'Folium', 
                'Time', 
                'Re']


  const toolsList = tools.map(tool => <li>{tool}</li>);

  return (
    <div className='tools'>{toolsList}</div>
  )
}
