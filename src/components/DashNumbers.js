import React from 'react'
import Cities from './Cities'
import Buildings from './Buildings'
import Period from './Period'

export default function DashNumbers() {
  return (
    <div className='row'>
        <Cities />
        <Buildings />
        <Period />
    </div>
  )
}
