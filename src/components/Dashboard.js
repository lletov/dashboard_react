import React from 'react'
import DashNumbers from './DashNumbers'
import DashBig from './DashBig'
import Plots from './Plots'

export default function Dashboard() {
  return (
    <div className='dashboard'>
        <DashNumbers />
        <DashBig />
        <Plots />

    </div>
  )
}
