import PriceTicker from '../PriceTicker'; // Adjust the path if necessary
import PriceTicker from '../PriceTicker'; // Adjust the path if necessary



import Home from './pages/Home';
import Product from './pages/Product';
import Token from './pages/Token';
import News from './pages/News';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Whitepaper from './pages/Whitepaper';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/normalize.css';
import './styles/webflow.css';
import './styles/kwe-website.webflow.css';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/how-it-works" element={<Product/>}/>
          <Route path="/token" element={<Token/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/whitepaper" element={<Whitepaper/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
