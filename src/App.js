import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import './Normalize.css'
import './Style.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import SubmitDone from './Pages/SubmitDone';
import Leads from './Pages/Leads';

function App() {
  return (
    <Router>
      <Navbar/>
    <div>
        <Switch>
          <Route path = '/' exact component={Home} />
          <Route path = '/Projects' component={Projects} />
          <Route path = '/Blogs' component={Blogs} />
          <Route path = '/Contact' component={Contact} />
          <Route path = '/SubmitDone' component={SubmitDone} />
          <Route path = '/Leads' component={Leads} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
