import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct';
import ScrollToTop from './components/ScrollToTop';
import Cart from './components/cart';
import { useEffect, useState } from 'react';
function App() {
  const [openNavbar, setOpenNavbar] = useState(false);
  useEffect(() => {
    setOpenNavbar(false)
  }, [])

  const getLocalStorage = () => {
    const list = localStorage.getItem("order");

    if (list) {
      return JSON.parse(localStorage.getItem("order"))

    } else {
      return [];
    }
  }

  return (
    <Router>

      <Navbar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
      <ScrollToTop setOpenNavbar={setOpenNavbar} />
      <Routes>
        <Route exact path="/" element={<><Home openNavbar={openNavbar} /></>}></Route>
        <Route exact path="/product/:id" element={<><SingleProduct getLocalStorage={getLocalStorage} /></>}></Route>
        <Route exact path="/cart" element={<><Cart getLocalStorage={getLocalStorage} /></>}></Route>
      </Routes>
      <Footer />
    </Router>

  )
}

export default App;
