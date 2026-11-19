import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="page-section container">
      <div className="page-heading">
        <span className="eyebrow">ABOUT US</span>
        <h1>Helping young people turn skills into opportunity.</h1>
        <p>MIAC Youth Skills is designed to support youth with practical learning that can be applied in daily life, work and business.</p>
      </div>
      <div className="about-grid">
        <article className="info-panel"><div className="feature-icon">🎯</div><h2>Our mission</h2><p>To help young people access relevant skills and learning resources that support personal growth, employability and entrepreneurship.</p></article>
        <article className="info-panel"><div className="feature-icon">🌍</div><h2>Our vision</h2><p>A future where young people can develop their talents, create opportunities and contribute positively to their communities.</p></article>
        <article className="info-panel"><div className="feature-icon">🤝</div><h2>Our values</h2><p>Practical learning, creativity, responsibility, inclusion, continuous improvement and community impact.</p></article>
      </div>
      <div className="inline-cta"><div><h2>Want to start learning?</h2><p>Explore available skill areas and choose where to begin.</p></div><Link to="/courses" className="button">Explore courses →</Link></div>
    </section>
  );
}