import React from "react";
import { useMemo, useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Courses() {
  const [search, setSearch] = useState("");
  const filteredCourses = useMemo(() => {
    const term = search.trim().toLowerCase();
    return courses.filter(course =>
      `${course.title} ${course.category} ${course.description}`.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <section className="page-section container">
      <div className="page-heading">
        <span className="eyebrow">OUR LEARNING PROGRAMS</span>
        <h1>Explore courses</h1>
        <p>Discover practical learning areas and choose a skill you want to develop.</p>
      </div>
      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses or skill areas..." />
      </label>
      {filteredCourses.length ? (
        <div className="course-grid">{filteredCourses.map(course => <CourseCard key={course.id} course={course} />)}</div>
      ) : (
        <div className="empty-state"><h3>No courses found</h3><p>Try another keyword.</p></div>
      )}
    </section>
  );
}