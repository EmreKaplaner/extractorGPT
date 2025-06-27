import React, { useState } from 'react';
import { TabTypes } from '../../../constants/index.js';
import { ExtractListTab } from '../tabs/ExtractListTab';
import { ExtractDetailsTab } from '../tabs/ExtractDetailsTab';
import { ExtractEmailsTab } from '../tabs/ExtractEmailsTab';
import { ExtractImagesTab } from '../tabs/ExtractImagesTab';
import { HelpTab } from '../tabs/HelpTab';

/**
 * MainPanel - Main WebPeeler-style UI panel
 * Contains all tabs and main functionality
 */
export function MainPanel({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('list');
  const [isPro, setIsPro] = useState(false);
  
  if (!isOpen) {
    return null;
  }
  
  // Tab configuration
  const tabs = [
    { id: 'list', label: 'Extract List', icon: '📋' },
    { id: 'details', label: 'Extract Page Details', icon: '📄' },
    { id: 'emails', label: 'Extract Emails', icon: '✉️', isPro: true },
    { id: 'images', label: 'Extract Images', icon: '🖼️', isPro: true },
    { id: 'help', label: 'Help', icon: '❓' }
  ];
  
  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      width: '420px',
      backgroundColor: '#1a1a1a',
      color: 'white',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      overflow: 'hidden',
      zIndex: '999999',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header with Tabs */}
      <div style={{
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {/* Title Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#7c3aed',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px'
            }}>
              🐼
            </div>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>
              ExtractorGPT
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#9ca3af',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px',
              lineHeight: '1',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            ×
          </button>
        </div>
        
        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          padding: '0 20px',
          gap: '4px',
          overflowX: 'auto'
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '8px 16px',
                background: activeTab === tab.id ? 'rgba(124, 58, 237, 0.2)' : 'none',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid #7c3aed' : '2px solid transparent',
                color: activeTab === tab.id ? 'white' : '#9ca3af',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (activeTab !== tab.id) {
                  e.target.style.color = '#e5e7eb';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) {
                  e.target.style.color = '#9ca3af';
                }
              }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.isPro && (
                <span style={{
                  fontSize: '10px',
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontWeight: '600'
                }}>
                  PRO
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Content Area */}
      <div style={{ 
        flex: 1,
        overflowY: 'auto',
        padding: '24px'
      }}>
        {activeTab === 'list' && <ExtractListTab isPro={isPro} />}
        {activeTab === 'details' && <ExtractDetailsTab isPro={isPro} />}
        {activeTab === 'emails' && <ExtractEmailsTab isPro={isPro} />}
        {activeTab === 'images' && <ExtractImagesTab isPro={isPro} />}
        {activeTab === 'help' && <HelpTab isPro={isPro} onProToggle={setIsPro} />}
      </div>
    </div>
  );
}

export default MainPanel; 