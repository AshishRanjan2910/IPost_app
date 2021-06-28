import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import './Normalize.css'
import './Style.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
