import React from 'react';

const Dashboard = () => {
  const userEmail = localStorage.getItem('userEmail');
  const username = userEmail ? userEmail.split('@')[0] : '';

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Welcome to your Dashboard, {username}!</h1>
    </div>
  );
};

export default Dashboard;