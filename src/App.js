import "./App.css";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Footer from "./components/footer/footer";
import Trade from "./components/pages/trade";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<Trade />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
