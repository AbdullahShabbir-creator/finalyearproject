import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginAD.css';

const LoginAD = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
  
      // Save token in localStorage
      localStorage.setItem('token', response.data.token);
  
      // Redirect user to the homepage or a protected route
      navigate('/');  // Or any route after login
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };
  
  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Login</h2>
        <form className="form-content" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="form-button">Login</button>
        </form>
        {error && <p className="form-error">{error}</p>}
        {/* <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p> */}
      </div>
    </div>
  );
};

export default LoginAD;
