
import React, { useState } from 'react';
import API from '../services/api';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      const response = await API.post('/auth/login', formData);

      // Save JWT token
      localStorage.setItem('token', response.data.token);

      // Save student information
      localStorage.setItem(
        'user',
        JSON.stringify(response.data.user)
      );

      // Open dashboard
      window.location.href = '/dashboard';

    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Login failed'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>MIAC YOUTH SKILLS</h1>

        <p className="login-subtitle">
          Empowering Youth Through Technology and Skills
        </p>

        <h2>Student Login</h2>

        <form className="login-form" onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>

        </form>

        {message && (
          <p className="login-message">{message}</p>
        )}

        <p className="login-footer">
          © 2026 MIAC Youth Skills. All Rights Reserved.
        </p>

      </div>
    </div>
  );
}

export default Login;
