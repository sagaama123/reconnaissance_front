import React, { useContext } from 'react';
import "./navbar.scss"; // Import the CSS file
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { DarkModelContext } from '../../context/darkModelContext';

export const Navbar = () => {
  const { dispatch } = useContext(DarkModelContext);
  return (
    <div className='navbarAdmin'>
      <hr />
      <div className="wrapper">
        <div className="search">
          <input type='text' placeholder='Search' />
          <SearchIcon className='icon' />
        </div>
        <div className='items'>
          <div className="item">
            <LanguageIcon className='icon' />
            English
          </div>
          <div className="item">
            <DarkModeIcon className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>
          <div className="item">
            <ListAltIcon className='icon' />
          </div>
          <div className="item">
            <img
              src="../assets/img/img1.jpg"
              alt=""
              className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
