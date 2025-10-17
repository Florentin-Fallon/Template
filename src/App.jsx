import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Nav/Header";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Menu from "./Menu";
import Footer from "./components/Nav/Footer";
function App() {
  return (
    <Router>
      <Header logoText="Maison Burger" nomApp="Maison Burger" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
