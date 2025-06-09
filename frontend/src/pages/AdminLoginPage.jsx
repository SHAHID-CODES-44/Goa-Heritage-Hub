import React, { useState } from 'react';
import { loginAdmin } from '../services/admloginService';
import { useNavigate } from 'react-router-dom';
import "./AdmLogin.css";

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginAdmin(username, password);
      localStorage.setItem('adminToken', data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="adminlogin-container" className="adminlogin-container">
      <h2 className="adminlogin-title">Admin Login</h2>
      <form className="adminlogin-form" onSubmit={handleLogin}>
        <input
          className="adminlogin-input"
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="adminlogin-input"
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="adminlogin-button" type="submit">Login</button>
        {error && <p className="adminlogin-error">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLoginPage;