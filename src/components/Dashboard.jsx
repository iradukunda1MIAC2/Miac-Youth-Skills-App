
import React, { useEffect, useState } from 'react';
import API from '../services/api';
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('Loading dashboard...');
const [courses, setCourses] = useState([]);
const [enrolledCourses, setEnrolledCourses] = useState([]);
  useEffect(() => {
    API.get('/enrollments/my-courses', {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})
  .then((response) => {
    setEnrolledCourses(response.data.enrollments);
  })
  .catch((error) => {
    console.error('Failed to load enrolled courses:', error);
  });
    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = '/';
      return;
    }

    API.get('/dashboard/student', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        setUser(response.data.user);

        const savedUser = JSON.parse(
          localStorage.getItem('user') || '{}'
        );

        setMessage(savedUser.name || 'Student');
      })
      .catch(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/';
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  if (!user) {
    return <div className="dashboard-loading">{message}</div>;
  }

  return (
    <div className="dashboard-container">

      <aside className="sidebar">
        <h2 className="logo">MIAC</h2>
        <p className="logo-subtitle">YOUTH SKILLS</p>

        <nav>
          <a href="/dashboard" className="active">Dashboard</a>
          <a href="#courses">My Courses</a>
          <a href="#progress">My Progress</a>
          <a href="#profile">My Profile</a>
        </nav>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <h1>Student Dashboard</h1>
            <p>Welcome back to your learning space!</p>
          </div>

          <div className="student-avatar">
            {message.charAt(0).toUpperCase()}
          </div>
        </header>

        <section className="welcome-banner">
          <div>
            <h2>Hello, {message}!</h2>
            <p>Keep learning, keep growing, and build your future.</p>
          </div>
          <span className="welcome-icon">🎓</span>
        </section>

        <section className="dashboard-cards">
          <div className="dashboard-card">
            <h3>My Courses</h3>
            <p>{enrolledCourses.length}</p>
            <span>Enrolled courses</span>
          </div>

          <div className="dashboard-card">
            <h3>Completed</h3>
            <p>0</p>
            <span>Completed courses</span>
          </div>

          <div className="dashboard-card">
            <h3>Certificates</h3>
            <p>0</p>
            <span>Earned certificates</span>
          </div>
        </section>

        <section className="profile-section" id="profile">
          <h2>Student Information</h2>

          <div className="profile-details">
            <p><strong>Student:</strong> {message}</p>
            <p><strong>Student ID:</strong> {user.id}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Status:</strong> Active</p>
          </div>
        </section>

        <section className="courses-section" id="courses">
          <h2>Learning Categories</h2>

          <div className="course-grid">
            <div className="course-item">💻 Software Development</div>
            <div className="course-item">🏗️ Building & Construction</div>
            <div className="course-item">🎨 Multimedia</div>
            <div className="course-item">🧵 Tailoring & Carpentry</div>
          </div>
        </section>

        <footer className="dashboard-footer">
          © 2026 MIAC Youth Skills. All Rights Reserved.
        </footer>

      </main>
    </div>
  );
}

export default Dashboard;
