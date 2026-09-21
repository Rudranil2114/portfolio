import React, { useState } from 'react';
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
}