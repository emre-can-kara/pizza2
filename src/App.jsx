import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import Middle from './Middle';
import NavBarsSecond from './NavbarSecond';
import Footer from './Footer';
import OrderPizza from './OrderPizza';
import Bottom from './Bottom';
import Success from './Success';

function App() {
  return (
   
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Router>
      <Switch>
        {/* Ana Sayfa */}
        <Route exact path="/">
          <>
            <Banner />
            <Navbar />
            <Middle />
            <NavBarsSecond />
            <Bottom />
            <Footer />
          </>
        </Route>
        {/* Order Pizza Sayfası */}
        <Route path="/OrderPizza">
          <OrderPizza />
        </Route>
        <Route path="/Success">
        <Success/>
        </Route>
      </Switch>
    </Router>
   
  </div>
  
  );
}

export default App;
