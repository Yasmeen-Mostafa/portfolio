import "./App.css";
import React from "react";
import NavBar from "./components/NavBar.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Store from "./pages/store";
import Home from "./pages/home";
import Counter from "./pages/counter";
import CounterTitle from "./components/Counter.component";
import { Details } from "./pages/product-details";
function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="store/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
