import React from 'react'

export default function Progress () {
  return (
    <div className='progress'>
        <div className='progress-col'>
            <div className='progress-bar green'></div>
            <h5>Few cities</h5>
        </div>
        <div className='progress-col'>
            <div className='progress-bar green'></div>
            <h5>Base analysis</h5>
        </div>
        <div className='progress-col'>
            <div className='progress-bar'></div>
            <h5>Add more cities</h5>
        </div>
        <div className='progress-col'>
            <div className='progress-bar'></div>
            <h5>Add more dependences</h5>
        </div>
    </div>
  )
}
