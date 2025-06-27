import React from 'react';

export function SettingsTab() {
  return (
    <div>
      <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '18px',
        fontWeight: '600',
        color: 'white'
      }}>
        Settings
      </h3>
      
      <div style={{
        padding: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#9ca3af'
        }}>
          Settings will be available in a future update.
        </p>
      </div>
    </div>
  );
}

export default SettingsTab; 