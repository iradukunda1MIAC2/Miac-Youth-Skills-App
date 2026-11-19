import react from 'react';
import React, { useState } from 'react';

import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [notice, setNotice] = useState("");
  const navigate = useNavigate();
  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    // Demo only: do not use localStorage as production authentication.
    localStorage.setItem("miacDemoName", form.name);
    localStorage.setItem("miacDemoEmail", form.email);
    setNotice("Demo profile created in this browser. No secure account was created.");
    setTimeout(() => navigate("/dashboard"), 900);
  }

  return (
    <section className="auth-section container">
      <div className="auth-intro"><span className="eyebrow">START YOUR JOURNEY</span><h1>Every new skill opens a door.</h1><p>Create a demo profile and explore the MIAC Youth Skills learning experience.</p><div className="auth-decoration">✦</div></div>
      <form className="form-card auth-card" onSubmit={handleSubmit}>
        <h2>Create your account</h2><p className="muted">Join the learning community.</p>
        {notice && <p className="notice">{notice}</p>}
        <label>Full name<input name="name" value={form.name} onChange={update} required placeholder="Your full name" /></label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com" /></label>
        <label>Password<input name="password" type="password" value={form.password} onChange={update} required minLength="4" placeholder="At least 4 characters" /></label>
        <button className="button button-full" type="submit">Create demo profile →</button>
        <p className="form-bottom">Already registered? <Link to="/login">Login</Link></p>
      </form>
    </section>
  );
}