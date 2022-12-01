import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rental from './pages/Rental';
import About from './pages/About';
import Error from './pages/Error';
import './style/Style.css';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Rental/:id" element={<Rental />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </Router>
)