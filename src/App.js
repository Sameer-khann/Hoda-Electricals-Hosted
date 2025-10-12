import './App.css';
import About from './Components/About';
import Carousel from './Components/Carousel';
import Contact from './Components/Contact';
// import Homepage from './Components/Homepage';
import Servises from './Components/Servises';
import Project from './Components/Project';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <>

      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Carousel />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Servises" element={<Servises />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>

        </Routes>
      </Router>
      
      {/* <Route path="/Projects" element={<Projects />}></Route> */}
    </>

  );
}

export default App;
