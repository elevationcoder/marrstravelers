import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Adventures from './pages/Adventures';
import Tips from './pages/Tips';
import NavBar from './components/NavBar';
import FullPost from './pages/FullPost';
import Affiliates from './pages/Affiliates';

function App() {
  return (
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/affiliates" element={<Affiliates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adventures/:postId" element={<FullPost />} />
      </Routes>
    </Router>
  );
}

export default App;
