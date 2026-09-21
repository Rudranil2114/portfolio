import React from 'react';
export default function Projects() {
  const projects = [
    { title: 'Personal Portfolio Website', desc: 'Built using HTML, CSS, and JavaScript to showcase academic background and technical skills.', tech: 'HTML/CSS/JS' },
    { title: 'Student Task Management System', desc: 'A single-page React application to create, track, filter, and manage tasks efficiently.', tech: 'React.js' },
    { title: 'Database Record Keeper', desc: 'A console-based data tracking system applying DBMS principles using Python and basic structures.', tech: 'Python / DBMS' }
  ];
  return (
    <div className="page-container">
      <div className="page-header"><h1>Academic & Web Projects</h1><p>Showcasing practical work and development practice</p></div>
      <div className="project-grid">
        {projects.map((p, idx) => (
          <div key={idx} className="project-card">
            <span className="tech-tag">{p.tech}</span>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}