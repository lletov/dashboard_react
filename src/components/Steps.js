import React from 'react'
import Step from './Step'
import {steps} from './../data.js'

export default function Steps() {

  const stepsList = steps.map(step => <Step number={step.number} title={step.title} text={step.text} />);

  return (
    <div className='steps'>
        {stepsList}
    </div>
  )
}
