import React, { useContext } from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link } from "react-router-dom"
import { DarkModelContext } from '../../context/darkModelContext';
export const Sidebar = () => {
    const{dispatch}=useContext(DarkModelContext);
  return (
    <div className='sidebarAdmin'>
        <div className='top'>
            <Link to="/admin"  style={{textDecoration:"none"}}>
            <span className='logo' >admin</span>
            </Link>
        </div>
        <hr />
        <div className='center'>

            <ul>
            <Link to="/admin"  style={{textDecoration:"none"}}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <Link to="/admin/users"  style={{textDecoration:"none"}}>
                <li>
                    <PersonPinIcon className='icon'/>
                   
                    <span>users</span>
                    
                </li>
                </Link>
                {/*<Link to="/admin/stats"  style={{textDecoration:"none"}}>
                <li>
                    <LeaderboardIcon className='icon'/>
                    <span>stats</span>
                </li>
  </Link>*/}
                <Link to="/admin/profile"  style={{textDecoration:"none"}}>
                <li>
                    <AccountCircleIcon className='icon'/>
                    <span>profile</span>
                </li>
                </Link>
                <Link to="/"  style={{textDecoration:"none"}}>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>logout</span>
                </li>
                </Link>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})}></div>
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})}></div>
            </div>
    </div>
  )
}
