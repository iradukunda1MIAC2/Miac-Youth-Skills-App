import React from "react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-icon" aria-hidden="true">{course.icon}</div>
      <span className="eyebrow">{course.category}</span>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-meta"><span>{course.level}</span><span>{course.duration}</span></div>
      <Link to="/register" className="text-link">Start learning <span aria-hidden="true">→</span></Link>
    </article>
  );
}