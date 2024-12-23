import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import About from '../pages/AllowUpdate.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allowupdate" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
