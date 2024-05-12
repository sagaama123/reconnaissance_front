import React from 'react'
import {Sidebar} from '../../components/sidebar/Sidebar'


import './list.scss'
import { Navbar } from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'

export const List = () => {
  return (
    <div className='listAdmin '>
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <Datatable/>
    </div>
  </div>
  )
}
