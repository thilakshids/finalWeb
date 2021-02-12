import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Contactus from './components/pages/Contactus';
import Qrcode from './components/Qrcode';
import Aboutus from './components/pages/Aboutus';
import Mycart from './components/pages/Mycart';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import DeliveryPerson from './components/DeliveryPerson';
import shopReg from './components/shopReg';
import Admin from './components/admin';
import Food from './components/Food/Food';
import Fashion from './components/Fashion/Fashion';
import Grocery from './components/Grocery/Grocery';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Devices from './components/Devices/Devices';
import Stationary from './components/Stationary/Stationary';
import Online from './components/Online';
// import TermsAndConditionsModal from './components/TermsAndConditionsModal';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/mycart' component={Mycart} />
          <Route path='/contactus' component={Contactus} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/deliver' component={ DeliveryPerson} />
          <Route path='/admin' component={ Admin} />
          <Route path='/shop' component={ shopReg} />
          <Route path='/food' component={ Food} />
          <Route path='/sta' component={ Stationary} />
          <Route path='/grocery' component={Grocery} />
          <Route path='/fashion' component={ Fashion} />
          <Route path='/devices' component={Devices} />
          <Route path='/cosmetics' component={Cosmetics} />
          <Route path='/online' component={Online} />
          <Route path='/qrcode' component={Qrcode} />
        

         
        </Switch>
      </Router>
    </>
  );
}

export default App;
