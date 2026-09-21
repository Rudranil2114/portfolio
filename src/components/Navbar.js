import React from 'react';
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
}