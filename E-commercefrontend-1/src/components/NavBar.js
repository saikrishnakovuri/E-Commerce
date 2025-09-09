import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setUser(userEmail.split('@')[0]);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('userEmail');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">E-commerce</Link>
      </div>
      <div>
        {user ? (
          <div className="flex items-center">
            <span className="mr-4">Hello, {user}</span>
            <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center">
            <span className="mr-4">Hello, Sign In</span>
            <div className="relative">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Account & Lists
              </button>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;