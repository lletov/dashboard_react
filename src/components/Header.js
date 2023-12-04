import React from 'react'
import Navbar from './Navbar'
import Paragraph from './Paragraph'
import Tools from './Tools'
import Steps from './Steps'
import Table from './Table'
import { isContentEditable } from '@testing-library/user-event/dist/utils'

export default function Header() {
  return (
    <div className='content'>
        <Navbar />
        <Paragraph title={'Tools'} content={<Tools/>} />
        <Paragraph title={'Description'} content={'Trends and buildings construction dynamic of Moscow, St. Petersburg and Kazan sities analysis from 1600 till 2021 years.'} />
        <Paragraph title={'Steps'} content={<Steps/>} />
        <Table />
    </div>
  )
}
