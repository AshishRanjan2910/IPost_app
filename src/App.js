import './/Normalize.css'
import './Style.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Blogs/>
      <Contact/>
    </div>
  );
}

export default App;
