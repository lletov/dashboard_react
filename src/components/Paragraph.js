import React from 'react'

export default function Paragraph({title, content}) {
  return (
    <div className='paragraph'>
        <h2>{title}</h2>
        {content}
    </div>
  )
}
