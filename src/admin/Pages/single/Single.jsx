import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
import './single.scss'


export const Single = () => {
  return (
    <div className="singleAdmin">
       <Sidebar/>
      
      <div className="singleContainer">
      <Navbar/>
      <div className="topS">
        <div className="leftS">
          
          <h1 className="title">information</h1>
         <div className="item">
            <img
             src="../assets/img/img1.jpg"
             alt=""
             className='itemImgA'
            />
            <div className="details">
              <h1 className="itemTitle">Med Aziz sagaama</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">azizsagaama10@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">phone:</span>
                <span className="itemValue">+216 29117397</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">23 rue ribat sousse</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Tunisia</span>
              </div>
              </div> 
          </div>
        </div>
      </div>
      <div className="topS">
        <div className="leftS">
          
          <h1 className="title">information</h1>
         <div className="item">
            <img
             src="../assets/img/mon.jpeg"
             alt=""
             className='itemImgA'
            />
            <div className="details">
              <h1 className="itemTitle">Med Amine Mouneni</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">Aminemouneni@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">phone:</span>
                <span className="itemValue">+216 97133455</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">hay riadh sousse</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">Tunisia</span>
              </div>
              </div> 
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
