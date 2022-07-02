import "./App.css";
import React from "react";
import NavBar from "./components/NavBar.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Store from "./pages/store";
import Home from "./pages/home";
import Counter from "./pages/counter";
import Signup from "./pages/signUp";
import { Details } from "./pages/product-details";
import Todo from "./pages/todo/Todo";
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
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
