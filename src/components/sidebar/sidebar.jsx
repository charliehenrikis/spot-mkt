import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="dashboard-nav">
      <ul>
        <li className={activeTab === 'dashboard' ? 'active' : ''}>
          <Link to="/dashboard" onClick={() => setActiveTab('dashboard')}>
            <i className="fas fa-home"></i> Dashboard
          </Link>
        </li>
        <li className={activeTab === 'projects' ? 'active' : ''}>
          <span onClick={() => setActiveTab('projects')}>
            <i className="fas fa-project-diagram"></i> Projetos
          </span>
        </li>
        <li className={activeTab === 'clients' ? 'active' : ''} onClick={() => setActiveTab('clients')}>
          <i className="fas fa-users"></i> Clientes
        </li>
        <li className={activeTab === 'reports' ? 'active' : ''} onClick={() => setActiveTab('reports')}>
          <i className="fas fa-chart-bar"></i> Relatórios
        </li>
        <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
          <i className="fas fa-cog"></i> Configurações
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;