import React from 'react';

function UserInfo({ name }) {
  return (
    <div className="user-info">
      <h3 className="mb-3">User Information</h3>
      <div className="info-item">
        <span className="info-label">
          <i className="bi bi-person-badge me-2"></i>Name:
        </span>
        <span className="info-value">{name}</span>
      </div>
      <div className="info-item mt-2">
        <span className="info-label">
          <i className="bi bi-envelope me-2"></i>Email:
        </span>
        <span className="info-value">juliuslobaton9021@gmail.com</span>
      </div>
      <div className="info-item mt-2">
        <span className="info-label">
          <i className="bi bi-envelope me-2"></i>Age:
        </span>
        <span className="info-value">21</span>
      </div>
      <div className="info-item mt-2">
        <span className="info-label">
          <i className="bi bi-shield-check me-2"></i>Status:
        </span>
        <span className="info-value">
          <span className="status-badge active">Active</span>
        </span>
      </div>
    </div>
  );
}

export default UserInfo;