import React, { useState, useEffect } from 'react';
import './widget.scss';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PersonIcon from '@mui/icons-material/Person';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom'; // Import Link from React Router
import axios from 'axios';

export const Widget = ({ type }) => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users');
        setUserCount(response.data.length);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };
    fetchData();
  }, []);

  let data;
  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'see all users',
        icon: <PersonIcon className='icon' />,
      };
      break;
    case 'verified':
      data = {
        title: 'verified',
        isMoney: false,
        link: 'view all users',
        icon: <DoneIcon className='icon' />,
      };
      break;
      case 'male':
        data = {
          title: 'male',
          isMoney: false,
          link: 'view all users',
          icon: <DoneIcon className='icon' />,
        };
        break;
        case 'female':
          data = {
            title: 'female',
            isMoney: false,
            link: 'view all users',
            icon: <DoneIcon className='icon' />,
          };
          break;
    default:
      break;
  }

  return (
    <div className='widgetAdmin'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>{userCount}</span>
        {/* Use Link to navigate to "/admin/users" */}
        <Link to="/admin/users" className='link'>{data.link}</Link>
      </div>

      <div className='right'>
        <div className='percentage'>
          <ArrowUpwardIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};
