import React from 'react';
export default function Home() {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1>Rudranil Saha</h1>
        <p className="subtitle">BCA (Honours) Student at Techno India University</p>
        <div className="contact-strip">
          <span>📧 rudranilsaha742@gmail.com</span>
          <span>📞 8388955475</span>
          <span>🏛️ Section: 3A | Expected Passout: 2027</span>
        </div>
      </div>

      <div className="card-section">
        <h2>Career Objective</h2>
        <p className="desc-text">I am a BCA (Honours) student seeking an entry-level opportunity to start my career in the IT field. I aim to gain practical experience, improve my skills, and grow step by step.</p>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>💻 Technical Skills</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>DBMS (Data & Records Management)</li>
            <li>Programming: C, Python</li>
            <li>MS Excel & MS PowerPoint</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3>⭐ Strengths & Hobbies</h3>
          <ul>
            <li>Quick learner and adaptable</li>
            <li>Practical thinking & real-life understanding</li>
            <li>Exploring web development</li>
            <li>Responsible and organized work practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
}