import "./App.css";
import Navbar from "./Conponets/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Single from "./Pages/Single"

function App() {
  return (
    <div className="App">
      <br/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Single/> } />
      </Routes>
    </div>
  );
}

export default App;
