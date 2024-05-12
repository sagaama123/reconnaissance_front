import Home from './pages/home'
import React, { useContext } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './auth/login';
import { Signup}  from './auth/Signup';
import { Loginadmin } from './admin/Pages/login/Loginadmin';
import { Homeadmin } from './admin/Pages/home/Homeadmin';
import { List } from './admin/Pages/list/List.jsx';
import {New} from './admin/Pages/new/New'
import {Single} from './admin/Pages/single/Single.jsx'
import "./admin/style/dark.scss"
import { DarkModelContext } from './admin/context/darkModelContext.js';
import { File } from './import/File.js';
import Camera from './reconnaissance/camera.js';
import Success from './succees/Succes.js';

function App() {
  const { darkMode } = useContext(DarkModelContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/File" element={<File />} />
          <Route path="/camera/:id" element={<Camera />} />
          <Route path="/Succes" element={<Success />} />
          <Route path="/admin" element={<Homeadmin />} />
          <Route path="/admin/loginadmin" element={<Loginadmin />} />
          <Route path="/admin/users" element={<List />} />
          <Route path="/admin/stats" element={<New />} />
          <Route path="/admin/profile" element={<Single />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
