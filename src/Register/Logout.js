import React from 'react';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/login');
    };
  
    return (
      <div className="text-center">
        <button onClick={handleLogout} className="btn btn-primary">
          Logout
        </button>
      </div>
    );
  };
  

export default Logout;
