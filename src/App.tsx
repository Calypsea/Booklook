import React, {useContext} from 'react';
import { HashRouter, Routes, Route } from "react-router-dom"

import './App.css';
import {ThemeProvider} from './Components/context/ViewMode'

import Header from './Components/Header'
import HomeBody from './Components/HomeBody';
import About from './Components/About';
import Layout from './Components/Layout';
import Browse from './Components/Browse';
import BookDetail from './Components/BookDetail';
import Favourites from './Components/Favourites';
import Register from './Components/AuthPages/Register';
import Login from './Components/AuthPages/Login';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeBody />} />
            <Route path="about" element={<About />} />
            <Route path="browse" element={<Browse />} />
            <Route path="browse/:id/*" element={<BookDetail />}/>
            <Route path="favourites" element={<Favourites />}/>
            <Route path="register" element={<Register />}/>
            <Route path="login" element={<Login />}/>
            
      
          </Route>
          <Route path="*" element={<h1> 404 Page not found</h1>}/>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
