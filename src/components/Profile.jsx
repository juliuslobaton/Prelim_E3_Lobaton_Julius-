import React from 'react';
import UserInfo from '../components/UserInfo';
import ProfilePicture from '../components/ProfilePicture';

function Profile({ user, updateName, darkMode }) {
  const handleNameChange = (e) => {
    updateName(e.target.value);
  };

  return (
    <div className="profile-container">
      <div className="app-card">
        <h2 className="card-title">User Profile</h2>
        
        <div className="profile-header">
          <ProfilePicture />
          
          <div className="profile-info">
            <UserInfo name={user.name} />
            
            <div className="mt-4">
              <label htmlFor="nameInput" className="form-label">Name:</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>
                <input 
                  type="text" 
                  id="nameInput" 
                  className="form-control" 
                  value={user.name} 
                  onChange={handleNameChange} 
                  placeholder="Enter your name"
                />
              </div>
      
            </div>
          </div>
        </div>
      </div>
      
      <div className="app-card">
        <h2 className="card-title">About</h2>
        <p>This profile page demonstrates React component hierarchy, props, and state management.</p>
        <p>The components used here include:</p>
        <ul className="mt-3">
          <li><strong>Profile:</strong> Parent component managing the overall structure</li>
          <li><strong>UserInfo:</strong> Child component displaying user information</li>
          <li><strong>ProfilePicture:</strong> Child component rendering the profile image</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;