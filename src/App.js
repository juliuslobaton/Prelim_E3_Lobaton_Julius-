import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import './App.css';

function App() {

  const [user, setUser] = useState({
    name: "Julius Lobaton",
    settings: {
      darkMode: false
    }
  });


  const updateName = (newName) => {
    setUser({
      ...user,
      name: newName
    });
  };


  const toggleDarkMode = () => {
    setUser({
      ...user,
      settings: {
        ...user.settings,
        darkMode: !user.settings.darkMode
      }
    });
  };

  return (
    <Router>
      <AppContent 
        user={user} 
        updateName={updateName} 
        toggleDarkMode={toggleDarkMode} 
      />
    </Router>
  );
}

function AppContent({ user, updateName, toggleDarkMode }) {
  const location = useLocation();
  const isDarkMode = user.settings.darkMode;

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>

      <nav className={`main-navbar ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            <i className="bi bi-person-badge me-2"></i>
            <span>Julius Lobaton</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              <i className="bi bi-house-door"></i>
              <span>Home</span>
            </Link>
            <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>
              <i className="bi bi-person"></i>
              <span>Profile</span>
            </Link>
            <Link to="/settings" className={`nav-link ${isActive('/settings') ? 'active' : ''}`}>
              <i className="bi bi-gear"></i>
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/profile" 
            element={
              <Profile 
                user={user} 
                updateName={updateName} 
                darkMode={isDarkMode} 
              />
            } 
          />
          <Route 
            path="/settings" 
            element={
              <Settings 
                darkMode={isDarkMode} 
                toggleDarkMode={toggleDarkMode} 
              />
            } 
          />
        </Routes>
      </div>

    </div>
  );
}

export default App;