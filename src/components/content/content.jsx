import './content.css';

const Content = () => {
  // Dados simulados para o dashboard
  const stats = [
    { title: 'Clientes Ativos', value: '1,248', change: '+12%', icon: <i className="fas fa-users"></i> },
    { title: 'Receita Estimada', value: 'R$ 42.500', change: '+8%', icon: <i className="fas fa-money-bill-wave"></i> },
    { title: 'Projetos', value: '24', change: '+3', icon: <i className="fas fa-project-diagram"></i> },
    { title: 'Taxa de Conversão', value: '24%', change: '+2%', icon: <i className="fas fa-chart-line"></i> }
  ];

  const recentProjects = [
    { name: 'Campanha de Marketing Digital', client: 'Tech Solutions', status: 'Em andamento', progress: 75 },
    { name: 'Redesign de Website', client: 'Comércio Fácil', status: 'Em andamento', progress: 45 },
    { name: 'Estratégia de Mídias Sociais', client: 'Restaurante Sabor', status: 'Concluído', progress: 100 },
    { name: 'SEO e Otimização', client: 'Advocacia Silva', status: 'Aguardando', progress: 0 }
  ];

  return (
    <main className="dashboard-main">
      <section className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.title}</h3>
              <p className="stat-value">{stat.value}</p>
              <span className="stat-change">{stat.change}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="dashboard-content">
        <div className="content-card projects-list">
          <div className="card-header">
            <h2>Projetos Recentes</h2>
            <button className="view-all">Ver todos</button>
          </div>
          <div className="card-content">
            <table>
              <thead>
                <tr>
                  <th>Projeto</th>
                  <th>Cliente</th>
                  <th>Status</th>
                  <th>Progresso</th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.map((project, index) => (
                  <tr key={index}>
                    <td>{project.name}</td>
                    <td>{project.client}</td>
                    <td>
                      <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                        {project.status}
                      </span>
                    </td>
                    <td>
                      <div className="progress-bar">
                        <div 
                          className="progress" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{project.progress}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-card quick-actions">
          <div className="card-header">
            <h2>Ações Rápidas</h2>
          </div>
          <div className="card-content">
            <button className="action-button">
              <i className="fas fa-plus"></i> Novo Projeto
            </button>
            <button className="action-button">
              <i className="fas fa-user-plus"></i> Adicionar Cliente
            </button>
            <button className="action-button">
              <i className="fas fa-file-export"></i> Exportar Relatório
            </button>
            <button className="action-button">
              <i className="fas fa-calendar"></i> Agendar Reunião
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Content;

