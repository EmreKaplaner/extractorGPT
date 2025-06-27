import React, { useContext, useState } from 'react';
import { Modal } from '../common/Modal';
import UserStateContext from '../../../state-management/user-state-provider';
import { authManager } from '../../../auth';

/**
 * DeviceManager - Device management UI
 * Allows users to manage their registered devices
 */
export function DeviceManager({ isOpen, onClose }) {
  const { userState, removeDevice } = useContext(UserStateContext);
  const [removingDevice, setRemovingDevice] = useState(null);
  const [error, setError] = useState(null);
  
  const { devices = [], maxDevices = 5 } = userState;
  const currentDevice = devices.find(d => d.isCurrent);
  
  const handleRemoveDevice = async (deviceId) => {
    setRemovingDevice(deviceId);
    setError(null);
    
    try {
      await authManager.removeDevice(deviceId);
      removeDevice(deviceId);
    } catch (err) {
      setError(err.message || 'Failed to remove device');
    } finally {
      setRemovingDevice(null);
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Device Manager"
      className="device-manager-modal"
    >
      <div className="device-manager-content">
        <div className="device-info">
          <p>You can use your license on up to {maxDevices} devices.</p>
          <p>Currently using {devices.length} of {maxDevices} devices.</p>
        </div>
        
        {error && (
          <div className="error-message">
            <span>❌</span> {error}
          </div>
        )}
        
        <div className="device-list">
          {devices.map(device => (
            <div 
              key={device.id} 
              className={`device-item ${device.isCurrent ? 'current' : ''}`}
            >
              <div className="device-details">
                <h4>
                  {device.name || 'Unknown Device'}
                  {device.isCurrent && <span className="current-badge">Current</span>}
                </h4>
                <p className="device-meta">
                  {device.os} • {device.browser}
                </p>
                <p className="device-date">
                  Last active: {formatDate(device.lastActive)}
                </p>
              </div>
              
              {!device.isCurrent && (
                <button
                  className="panda-extract-choice-button remove-button"
                  onClick={() => handleRemoveDevice(device.id)}
                  disabled={removingDevice === device.id}
                >
                  {removingDevice === device.id ? 'Removing...' : 'Remove'}
                </button>
              )}
            </div>
          ))}
        </div>
        
        {devices.length === 0 && (
          <div className="empty-view-title-container">
            <p>No devices registered</p>
          </div>
        )}
        
        <div className="device-manager-actions">
          <button
            className="panda-extract-choice-button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeviceManager; 