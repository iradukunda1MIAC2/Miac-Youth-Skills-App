import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const savedName = localStorage.getItem("miacDemoName") || email.split("@")[0] || "Student";
    localStorage.setItem("miacDemoName", savedName);
    setNotice("Demo sign-in complete. This is not secure account authentication.");
    setTimeout(() => navigate("/dashboard"), 700);
  }

  return (
    <section className="auth-section container">
      <div className="auth-intro"><span className="eyebrow">WELCOME BACK</span><h1>Keep building your future.</h1><p>Sign in to visit the sample student dashboard.</p><div className="auth-decoration">✦</div></div>
      <form className="form-card auth-card" onSubmit={handleSubmit}>
        <h2>Login</h2><p className="muted">Enter any email and password to try the demo.</p>
        {notice && <p className="notice">{notice}</p>}
        <label>Email address<input type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="you@example.com" /></label>
        <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength="4" placeholder="At least 4 characters" /></label>
        <button className="button button-full" type="submit">Login →</button>
        <p className="form-bottom">Don't have an account? <Link to="/register">Register here</Link></p>
      </form>
    </section>
  );
}