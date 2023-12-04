import React from 'react'

export default function Step({number, title, text}) {
  return (
    <div className='step'>
        <div className='step-number'><h3>{number}</h3></div>
        <div className='step-desc'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}
