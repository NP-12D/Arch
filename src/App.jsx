import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const location = useLocation();
  const pathName = location.pathname;

  const pageNames = {
    "/": "HOME",
    "/about": "ABOUT",
    "/portfolio": "PORTFOLIO",
    "/contact": "CONTACT",
  };

  const pageName = pageNames[pathName] || null;

  return (
    <>
      {pageName && <Header pageName={pageName} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {pageName && <Footer />}
    </>
  );
}

export default App;
