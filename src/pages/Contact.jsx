import React from "react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="page-section container">
      <div className="page-heading">
        <span className="eyebrow">GET IN TOUCH</span>
        <h1>Contact MIAC Youth Skills</h1>
        <p>Have a question or suggestion? Use this form to prepare your message.</p>
      </div>
      <div className="contact-layout">
        <div className="contact-aside">
          <h2>We'd like to hear from you.</h2>
          <p>Send a question about courses, learning resources or the platform.</p>
          <div className="contact-detail"><span>✉</span><div><b>Email</b><p>Add your official email address here</p></div></div>
          <div className="contact-detail"><span>⌖</span><div><b>Location</b><p>Rwanda</p></div></div>
        </div>
        <form className="form-card" onSubmit={handleSubmit}>
          {submitted ? <div className="success-message"><h3>Message prepared!</h3><p>This demo form does not send messages to a server yet. Connect a backend or email service to receive messages.</p><button className="button" type="button" onClick={() => setSubmitted(false)}>Write another message</button></div> : <>
            <div className="form-row">
              <label>Full name<input name="name" value={form.name} onChange={update} required placeholder="Your full name" /></label>
              <label>Email address<input name="email" type="email" value={form.email} onChange={update} required placeholder="you@example.com" /></label>
            </div>
            <label>Subject<input name="subject" value={form.subject} onChange={update} required placeholder="What is your message about?" /></label>
            <label>Message<textarea name="message" value={form.message} onChange={update} required rows="5" placeholder="Write your message..." /></label>
            <button className="button" type="submit">Prepare message →</button>
          </>}
        </form>
      </div>
    </section>
  );
}