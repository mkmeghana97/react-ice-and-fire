import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Allegiances from './components/Allegiances/Allegiances';
import Books from './components/Books/Books';
import './resources/styles/main.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/allegiances" element={<Allegiances/>} />
        <Route path="/books" element={<Books/>} />
      </Routes>
    </Router>
  );
}

export default App;




