import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Locations from './pages/Locations';
import About from './pages/About';
import Erreur from './pages/Erreur';
import './style/Style.css';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Locations/:id" element={<Locations />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Erreur />} />
    </Routes>
    <Footer />
  </Router>
)