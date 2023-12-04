import React from 'react'

export default function Period() {
  return (
    <div className='card' style={{width: '643px', height: '230px'}}>
        <h2>Period</h2>
        <p>Years period of parsed data</p>
        <div className='period-content'>
            <div className='card-content'><h1>1901</h1></div>
            <div><img src='./../img/icons/arrow.png' alt='to'></img></div>
            <div className='card-content'><h1>2021</h1></div>
        </div>
    </div>
  )
}
