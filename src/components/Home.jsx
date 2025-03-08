import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="home-container">
      <div className="app-card text-center">
        <h1 className="welcome-title">Welcome to My Profile</h1>
        <p className="lead mb-4">This website features a detailed user profile with settings to toggle between light and dark modes.</p>
        
        <div className="features-section my-5">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-item">
                <i className="bi bi-person-circle mb-3" style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }}></i>
                <h4>User Profile</h4>
                <p>View and update personal information with real-time updates.</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="feature-item">
                <i className="bi bi-gear-fill mb-3" style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }}></i>
                <h4>Settings</h4>
                <p>Customize experience with settings panel.</p>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="feature-item">
                <i className="bi bi-moon-stars-fill mb-3" style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }}></i>
                <h4>Dark Mode</h4>
                <p>Toggle between light and dark themes to suit your preference.</p>
              </div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={goToProfile}
          className="btn btn-primary btn-lg"
        >
          <i className="bi bi-person-badge"></i>
          <span>Go to Profile</span>
        </button>
      </div>
    </div>
  );
}

export default Home;