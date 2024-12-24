import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import AllowUpdate from '../pages/AllowUpdate.tsx';
import AllowAnt from '../pages/AllowAnt.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allowupdate" element={<AllowUpdate />} />
        <Route path="/allowant" element={<AllowAnt />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
