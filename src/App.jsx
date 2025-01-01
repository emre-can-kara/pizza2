import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import {colors} from './colors';
import Home from "./Home.jsx";
import OrderPizza from "./OrderPizza.jsx";
import {Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min.js';


function App() {
  

  return (
    <>


  <BrowserRouter> 
  <Switch>
    <Route path="/OrderPizza"> <OrderPizza /></Route>
    <div>
    <h1 style={{fontFamily: "'Arial, sans-serif", color:colors.white, position: "relative", zIndex: 1, }}> Kod Acıktırır, Pizza Doyurur</h1>
    <Link to="/OrderPizza">  <p style={{fontFamily: "'Roboto Condensed', sans-serif",backgroundColor:colors.yellow, position: "relative", zIndex: 1}}>Acıktım</p> </Link>
    <img src="images/iteration-1-images/logo.svg" style={{position: "relative", zIndex: 1,}}/>
    <img src="images/iteration-1-images/home-banner.png"  style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0}}/>
    </div>
    </Switch>
    </BrowserRouter>
   </>    
  )
}

export default App
