import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './notfound.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <i className="fas fa-exclamation-circle text-6xl text-yellow-500 mb-4"></i>
        <h1 className="text-2xl font-semibold mb-2">Página não encontrada</h1>
        <p className="text-gray-600 mb-4">Parece que você está perdido, vou te redirecionar a tela principal</p>
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 