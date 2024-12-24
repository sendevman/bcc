import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="mt-4 flex gap-2">
        <Link to="/allowupdate">AllowUpdate</Link>
        <Link to="/allowant">AllowANT</Link>
      </div>
    </div>
  );
};

export default Home;