import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
// import 'react-bootstrap';
import React from 'react';
import './Normalize.css'
import './Style.css';
import Navbar from './Components/Navbar';
import FIs from './Pages/FIs';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Invoice from './Pages/Invoice';
import SubmitDone from './Pages/SubmitDone';
import Leads from './Pages/Leads';
import User from './Pages/Users/User';
import Edit from './Pages/Users/Edit';


function App() {
  return (
    <Router>
      <Navbar/>
    <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path = '/FIs' component={FIs} />
          <Route path = '/AboutUs' component={AboutUs} />
          <Route path = '/Invoice' component={Invoice} />
          <Route path = '/SubmitDone' component={SubmitDone} />
          <Route path = '/Leads' component={Leads} />
          <Route path = '/User/:id' exact component={User} />
          <Route path = '/User/edit/:id' component={Edit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
