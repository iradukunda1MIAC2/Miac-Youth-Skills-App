import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="pill">LEARN • PRACTICE • GROW</span>
            <h1>Skills for today.<br /><span>Opportunities for tomorrow.</span></h1>
            <p className="hero-description">
              MIAC Youth Skills helps young people build practical, digital and entrepreneurial
              skills to move confidently toward work and self-employment.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="button">Explore courses <span>→</span></Link>
              <Link to="/about" className="button button-outline">Learn about MIAC</Link>
            </div>
            <div className="hero-note"><span className="note-dot"></span> Practical learning for a brighter future</div>
          </div>
          <div className="hero-visual">
            <div className="hero-illustration">
              <div className="sun-shape"></div>
              <div className="illustration-card card-top"><span>✦</span><div><b>Build skills</b><small>One step at a time</small></div></div>
              <div className="person-shape"><div className="person-head"></div><div className="person-body"></div><div className="person-book"></div></div>
              <div className="illustration-card card-bottom"><span>✓</span><div><b>Grow your future</b><small>Learn by doing</small></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div><strong>Practical</strong><span>Skills for real life</span></div>
          <div><strong>Flexible</strong><span>Learn at your pace</span></div>
          <div><strong>Future-ready</strong><span>Prepare for opportunities</span></div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <div><span className="eyebrow">LEARN SOMETHING NEW</span><h2>Explore our skill areas</h2></div>
          <Link to="/courses" className="text-link">View all courses →</Link>
        </div>
        <div className="course-grid">
          {courses.slice(0, 3).map(course => <CourseCard key={course.id} course={course} />)}
        </div>
      </section>

      <section className="why-section">
        <div className="container why-grid">
          <div className="why-mark"><span>MIAC</span><b>Youth<br />Skills</b><i>Learn. Build. Succeed.</i></div>
          <div>
            <span className="eyebrow">WHY MIAC YOUTH SKILLS?</span>
            <h2>Learning that connects to real life.</h2>
            <p>Our goal is to make useful knowledge and practical skills easier to access, so young people can prepare for employment, entrepreneurship and lifelong learning.</p>
            <Link to="/about" className="button">Discover our mission</Link>
          </div>
        </div>
      </section>

      <section className="cta-section container">
        <div><span className="eyebrow">YOUR NEXT STEP STARTS HERE</span><h2>Ready to build your skills?</h2><p>Choose a course and start exploring new possibilities.</p></div>
        <Link to="/register" className="button button-light">Join MIAC today →</Link>
      </section>
    </>
  );
}