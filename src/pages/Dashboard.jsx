import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

export default function Dashboard() {
  const name = localStorage.getItem("miacDemoName") || "Student";
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("miacDemoName");
    localStorage.removeItem("miacDemoEmail");
    navigate("/");
  }

  return (
    <section className="page-section container dashboard-page">
      <div className="dashboard-welcome">
        <div><span className="eyebrow">STUDENT DASHBOARD</span><h1>Welcome, {name}!</h1><p>Keep learning and take the next step toward your goals.</p></div>
        <button className="button button-outline" onClick={logout}>Exit demo</button>
      </div>
      <div className="dashboard-stats">
        <div className="dashboard-stat"><span>📚</span><small>Available courses</small><strong>{courses.length}</strong></div>
        <div className="dashboard-stat"><span>🎯</span><small>Courses started</small><strong>0</strong></div>
        <div className="dashboard-stat"><span>🏆</span><small>Certificates earned</small><strong>0</strong></div>
      </div>
      <div className="section-heading"><div><span className="eyebrow">YOUR LEARNING PATH</span><h2>Recommended courses</h2></div><Link to="/courses" className="text-link">All courses →</Link></div>
      <div className="dashboard-list">
        {courses.slice(0, 3).map(course => <article className="dashboard-course" key={course.id}><span className="dashboard-course-icon">{course.icon}</span><div><h3>{course.title}</h3><p>{course.description}</p><span className="course-tag">{course.duration}</span></div><Link to="/courses" className="text-link">View →</Link></article>)}
      </div>
      <p className="demo-warning">Demo notice: this dashboard uses sample data. It does not yet save real course progress or connect to a secure user database.</p>
    </section>
  );
}