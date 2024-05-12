import React from 'react'
import './featured.scss'
import { List } from '../table/Table.jsx'




export const Featured = () => {
  return (
    <div className='featuredAdmin'>
        <div className="listtitle">
          <List/>
        </div>
    </div>
  )
}
