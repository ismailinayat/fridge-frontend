import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useContext} from 'react'
import {RotateContext} from './contexts/RotateContext';

import './styles/globals.scss';
import JoyStick from "./pages/JoyStick"
import Cart from "./pages/Cart"
import ShopR from "./pages/ShopR"
import HomeVideo from "./pages/HomeVideo";
import FirstPage from "./pages/FirstPage";
import ShopR90 from "./pages/ShopR90";
import HomeVideo90 from "./pages/HomeVideo90";


function App() {

  const {rotate} = useContext(RotateContext)
  return (
    <Router>
      <Routes>


        <Route path="/" element = {<FirstPage/>}/>
        <Route path="/home" element = {rotate === 0 ? <HomeVideo/> : <HomeVideo90/>}/>
        <Route path="/joystick" element = {<JoyStick/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/shop" element = {rotate === 0 ? <ShopR/> : <ShopR90/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
