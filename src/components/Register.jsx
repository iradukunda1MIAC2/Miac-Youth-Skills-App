
import React, { useState } from 'react';
import API from '../services/api';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post('/auth/register', formData);

      setMessage(response.data.message);

      setFormData({
        name: '',
        email: '',
        password: ''
      });

    } catch (error) {
      setMessage(
        error.response?.data?.message || 'Registration failed'
      );
    }
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <h1>MIAC YOUTH SKILLS</h1>

        <p className="register-subtitle">
          Empowering Youth Through Technology and Skills
        </p>

        <h2>Student Registration</h2>

        <form className="register-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

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
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="register-message">{message}</p>

        <p className="register-footer">
          © 2026 MIAC Youth Skills. All Rights Reserved.
        </p>

      </div>
    </div>
  );
}

export default Register;
