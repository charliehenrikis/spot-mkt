import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/');
  };

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <img 
          src="https://spotmkt.com.br/wp-content/uploads/2023/05/Logo-SPOT-MKT-300x70.png" 
          alt="SPOT MKT Logo"
          className="h-10"
          loading="lazy"
        />
        <div className="user-profile">
          <span>Olá, Administrador</span>
          <div className="avatar">
            <img 
              src="https://ui-avatars.com/api/?name=Administrador&background=0D8ABC&color=fff" 
              alt="Avatar do usuário" 
              className="rounded-full border-2 border-blue-500 shadow-md"
              loading="lazy"
            />
          </div>
          <button 
            onClick={handleLogout}
            className="logout-button"
          >
            <i className="fas fa-sign-out-alt"></i> Sair
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;