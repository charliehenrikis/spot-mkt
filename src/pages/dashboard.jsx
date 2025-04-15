import { useState } from 'react';
import Header from '../components/header/header';
import Sidebar from '../components/sidebar/sidebar';
import Content from '../components/content/content';
import Footer from '../components/footer/footer';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="dashboard-container">
      <Header />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <Content />
      <Footer />
    </div>
  );
}
