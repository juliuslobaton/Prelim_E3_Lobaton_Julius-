import React from 'react';
import profilePic from '../components/image.jpg'; 

function ProfilePicture({ pictureUrl }) {
  return (
    <div className="profile-picture">
      <img 
        src={pictureUrl || profilePic} 
        alt="Profile" 
        className="profile-image" 
      />
      <div className="picture-overlay">
        <i className="bi bi-camera"></i>
      </div>
    </div>
  );
}

export default ProfilePicture;