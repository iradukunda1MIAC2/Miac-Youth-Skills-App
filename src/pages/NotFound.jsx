import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return <section className="page-section container empty-state"><span className="eyebrow">404 ERROR</span><h1>Page not found</h1><p>The page you are looking for does not exist.</p><Link className="button" to="/">Return home</Link></section>;
}