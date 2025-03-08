import React, { useState } from 'react';

function Settings({ darkMode, toggleDarkMode }) {

  const [localSettings, setLocalSettings] = useState({
    darkMode: darkMode
  });

  const handleDarkModeToggle = () => {

    setLocalSettings({
      ...localSettings,
      darkMode: !localSettings.darkMode
    });
    

    toggleDarkMode();
  };

  return (
    <div className="settings-container">
      <div className="app-card">
        <h2 className="card-title">Appearance Settings</h2>
        
        <div className="settings-group">
          <div className="switch-wrapper">
            <label className="switch">
              <input 
                type="checkbox" 
                checked={localSettings.darkMode} 
                onChange={handleDarkModeToggle} 
              />
              <span className="slider"></span>
            </label>
            <div className="switch-label">
              <h4>Dark Mode</h4>
              <p className="text-muted">Switch between light and dark themes</p>
            </div>
          </div>
        </div>
     
           
              </div>
            </div>
       
       

  );
}

export default Settings;