import "./App.css";
import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TabMenu from "./components/tabmenu";
import Home from "./components/pages/home";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
