const fs = require('fs');

['src/components', 'src/pages'].forEach(d => fs.mkdirSync(d, {recursive: true}));

fs.writeFileSync('src/components/Navbar.js', `import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand"><h2>Rudranil Saha</h2><span className="badge">BCA Portfolio & Tasks</span></div>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home / CV</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Task Manager</NavLink>
      </div>
    </nav>
  );
}`);

fs.writeFileSync('src/components/Footer.js', `import React from 'react';
export default function Footer() { return <footer className="footer"><p>&copy; {new Date().getFullYear()} Rudranil Saha | BCA (Honours) Student | Contact: rudranilsaha742@gmail.com</p></footer>; }`);

fs.writeFileSync('src/pages/Home.js', `import React from 'react';
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
}`);

fs.writeFileSync('src/pages/Projects.js', `import React from 'react';
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
}`);

fs.writeFileSync('src/pages/Tasks.js', `import React, { useState } from 'react';
export default function Tasks() {
  const [tasks, setTasks] = useState([
    { id: '1', header: 'Learn Advanced React Routing', description: 'Understand nested paths and dynamic route parameters.', priority: 'High', status: 'Pending' },
    { id: '2', header: 'Practice DBMS Normalization', description: 'Review database record management concepts.', priority: 'Medium', status: 'Raised' }
  ]);
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const addTask = (e) => {
    e.preventDefault();
    if (!header.trim()) return;
    setTasks([{ id: Date.now().toString(), header, description, priority, status: 'Raised' }, ...tasks]);
    setHeader(''); setDescription('');
  };

  const updateStatus = (id, status) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status } : t));
  };

  return (
    <div className="page-container">
      <div className="page-header"><h1>Task Manager App</h1><p>Organize daily academic and development tasks</p></div>
      
      <form onSubmit={addTask} className="task-form">
        <h3>Add New Task</h3>
        <input type="text" placeholder="Task title..." value={header} onChange={e => setHeader(e.target.value)} required />
        <textarea placeholder="Description..." value={description} onChange={e => setDescription(e.target.value)} required />
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="High">High Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="Low">Low Priority</option>
        </select>
        <button type="submit" className="btn-add">Add Task</button>
      </form>

      <div className="task-list">
        <h2>Active Tasks</h2>
        {tasks.map(t => (
          <div key={t.id} className="task-item">
            <div>
              <span className="badge-prio">{t.priority}</span>
              <h4>{t.header}</h4>
              <p>{t.description}</p>
              <small>Status: <b>{t.status}</b></small>
            </div>
            <div className="task-actions">
              <button onClick={() => updateStatus(t.id, 'Pending')} className="btn-s pending">Pending</button>
              <button onClick={() => updateStatus(t.id, 'Closed')} className="btn-s closed">Close</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}`);

fs.writeFileSync('src/App.js', `import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}`);

fs.writeFileSync('src/App.css', `* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', system-ui, sans-serif; }
body { background-color: #0f172a; color: #f8fafc; min-height: 100vh; }
.app-container { max-width: 1100px; margin: 0 auto; padding: 2rem; display: flex; flex-direction: column; min-height: 100vh; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding-bottom: 1rem; border-bottom: 1px solid #334155; margin-bottom: 2rem; }
.nav-brand h2 { color: #38bdf8; font-size: 1.5rem; }
.badge { background: #0284c7; color: #fff; padding: 0.2rem 0.6rem; border-radius: 12px; font-size: 0.75rem; }
.nav-links { display: flex; gap: 1rem; }
.nav-link { color: #94a3b8; text-decoration: none; font-weight: 600; padding: 0.4rem 0.8rem; border-radius: 6px; }
.nav-link.active, .nav-link:hover { color: #fff; background: #1e293b; }
.main-content { flex: 1; }
.page-container { display: flex; flex-direction: column; gap: 1.5rem; }
.hero-section { background: #1e293b; padding: 2rem; border-radius: 12px; border: 1px solid #334155; }
.hero-section h1 { font-size: 2.2rem; color: #38bdf8; }
.subtitle { color: #cbd5e1; font-size: 1.1rem; margin-top: 0.3rem; }
.contact-strip { display: flex; gap: 1.5rem; margin-top: 1rem; flex-wrap: wrap; color: #94a3b8; font-size: 0.9rem; }
.card-section, .skill-card { background: #1e293b; padding: 1.5rem; border-radius: 12px; border: 1px solid #334155; }
.card-section h2, .skill-card h3 { color: #38bdf8; margin-bottom: 0.8rem; }
.desc-text { color: #cbd5e1; line-height: 1.6; }
.skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.skill-card ul { list-style-position: inside; color: #cbd5e1; display: flex; flex-direction: column; gap: 0.4rem; }
.project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
.project-card { background: #1e293b; padding: 1.5rem; border-radius: 12px; border: 1px solid #334155; display: flex; flex-direction: column; gap: 0.6rem; }
.tech-tag { background: #0369a1; color: #e0f2fe; font-size: 0.75rem; padding: 0.2rem 0.5rem; border-radius: 4px; width: fit-content; font-weight: bold; }
.task-form { background: #1e293b; padding: 1.5rem; border-radius: 12px; border: 1px solid #334155; display: flex; flex-direction: column; gap: 0.8rem; max-width: 600px; }
.task-form input, .task-form textarea, .task-form select { background: #0f172a; border: 1px solid #334155; color: #fff; padding: 0.6rem; border-radius: 6px; }
.btn-add { background: #0284c7; color: #fff; border: none; padding: 0.6rem; border-radius: 6px; font-weight: bold; cursor: pointer; }
.task-list { margin-top: 1rem; display: flex; flex-direction: column; gap: 1rem; }
.task-item { background: #1e293b; padding: 1rem; border-radius: 8px; border: 1px solid #334155; display: flex; justify-content: space-between; align-items: center; }
.badge-prio { background: #b45309; color: #fef3c7; font-size: 0.7rem; padding: 0.1rem 0.4rem; border-radius: 4px; font-weight: bold; }
.task-actions { display: flex; gap: 0.5rem; }
.btn-s { border: none; padding: 0.4rem 0.8rem; border-radius: 4px; cursor: pointer; font-weight: bold; color: #fff; }
.btn-s.pending { background: #d97706; }
.btn-s.closed { background: #16a34a; }
.footer { text-align: center; padding: 2rem 0 1rem; border-top: 1px solid #334155; margin-top: 3rem; color: #94a3b8; font-size: 0.85rem; }
`);

fs.writeFileSync('.env', 'CI=false\nGENERATE_SOURCEMAP=false');
console.log('Rudranil portfolio setup completed successfully!');