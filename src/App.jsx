
import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const isLoggedIn = Boolean(localStorage.getItem('token'));

  const isDashboard = window.location.pathname === '/dashboard';

  if (isDashboard && isLoggedIn) {
    return <Dashboard />;
  }

  if (isDashboard && !isLoggedIn) {
    window.location.href = '/';
    return null;
  }

  return <Login />;
}

export default App;
