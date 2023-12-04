import React from 'react'
import Paragraph from './Paragraph'
import Progress from './Progress'

export default function Footer() {
  return (
    <div className='content'>
        <Paragraph title={'Total progress'} content={<Progress/>} />
        <Paragraph title={'Summary'} content={'Different statistic graphs for every city were received, summary mutual dependences graphs were received as well. They can be used to look after tendences and buildings construction dynamic, compare them with historical periods to predict the future tendences.'} />
    </div>
  )
}
