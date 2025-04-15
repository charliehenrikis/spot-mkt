import React, { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Hamburger button for mobile */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-[#29313A] text-white lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <nav className={`dashboard-nav ${isMobileMenuOpen ? 'translate-x-0' : ''}`}>
        <ul className="flex flex-col h-full">
          <li className={`${activeTab === 'dashboard' ? 'active' : ''} flex items-center gap-3`}>
            <Link to="/dashboard" onClick={() => {
              setActiveTab('dashboard');
              setIsMobileMenuOpen(false);
            }}>
              <i className="fas fa-home w-5 text-center"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`${activeTab === 'projects' ? 'active' : ''} flex items-center gap-3`}>
            <Link to="/projects" onClick={() => {
              setActiveTab('projects');
              setIsMobileMenuOpen(false);
            }}>
              <i className="fas fa-project-diagram w-5 text-center"></i>
              <span>Projetos</span>
            </Link>
          </li>
          <li className={`${activeTab === 'clients' ? 'active' : ''} flex items-center gap-3`} onClick={() => {
            setActiveTab('clients');
            setIsMobileMenuOpen(false);
          }}>
            <i className="fas fa-users w-5 text-center"></i>
            <span>Clientes</span>
          </li>
          <li className={`${activeTab === 'reports' ? 'active' : ''} flex items-center gap-3`} onClick={() => {
            setActiveTab('reports');
            setIsMobileMenuOpen(false);
          }}>
            <i className="fas fa-chart-bar w-5 text-center"></i>
            <span>Relatórios</span>
          </li>
          <li className={`${activeTab === 'settings' ? 'active' : ''} flex items-center gap-3`} onClick={() => {
            setActiveTab('settings');
            setIsMobileMenuOpen(false);
          }}>
            <i className="fas fa-cog w-5 text-center"></i>
            <span>Configurações</span>
          </li>
        </ul>
      </nav>
    </>
  );
};


export default Sidebar;