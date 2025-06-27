import React, { useState, useContext } from 'react';
import { Modal } from '../common/Modal';
import { GlobalStateContext } from '../../../state-management/global-state-provider';

/**
 * SettingsPopup - Settings configuration UI
 * Allows users to configure extraction settings
 */
export function SettingsPopup({ isOpen, onClose }) {
  const { globalState, updateExtractSettings } = useContext(GlobalStateContext);
  const [settings, setSettings] = useState(globalState.extractSettings);
  
  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  const handleSave = () => {
    updateExtractSettings(settings);
    onClose();
  };
  
  const handleReset = () => {
    setSettings(globalState.extractSettings);
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Settings"
      className="settings-popup"
    >
      <div className="settings-content">
        <div className="settings-section">
          <h3>Extraction Options</h3>
          
          <label className="setting-item">
            <input
              type="checkbox"
              checked={settings.extractImages}
              onChange={(e) => handleSettingChange('extractImages', e.target.checked)}
            />
            <span>Extract Images</span>
            <p className="setting-description">
              Include image URLs in extraction results
            </p>
          </label>
          
          <label className="setting-item">
            <input
              type="checkbox"
              checked={settings.extractAriaLabel}
              onChange={(e) => handleSettingChange('extractAriaLabel', e.target.checked)}
            />
            <span>Extract ARIA Labels</span>
            <p className="setting-description">
              Include accessibility labels in text extraction
            </p>
          </label>
        </div>
        
        <div className="settings-section">
          <h3>Data Filtering</h3>
          
          <div className="setting-item">
            <label>Remove Empty Groups Threshold</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={settings.removeEmptyGroupsThreshold}
              onChange={(e) => handleSettingChange('removeEmptyGroupsThreshold', parseFloat(e.target.value))}
            />
            <span className="setting-value">{Math.round(settings.removeEmptyGroupsThreshold * 100)}%</span>
            <p className="setting-description">
              Remove groups with this percentage of empty cells
            </p>
          </div>
          
          <div className="setting-item">
            <label>Remove Similar Groups Threshold</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={settings.removeSimilarGroupsThreshold}
              onChange={(e) => handleSettingChange('removeSimilarGroupsThreshold', parseFloat(e.target.value))}
            />
            <span className="setting-value">{Math.round(settings.removeSimilarGroupsThreshold * 100)}%</span>
            <p className="setting-description">
              Remove groups that are this similar to other groups
            </p>
          </div>
        </div>
        
        <div className="settings-actions">
          <button
            className="panda-extract-choice-button secondary"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="panda-extract-choice-button primary"
            onClick={handleSave}
          >
            Save Settings
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default SettingsPopup; 