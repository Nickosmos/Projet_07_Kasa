import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Rental from './pages/rental/Rental';
import About from './pages/about/About';
import Error from './pages/error/Error';
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