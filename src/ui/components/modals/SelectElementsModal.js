import React, { useState, useEffect } from 'react';

export function SelectElementsModal({ isOpen, onClose, urls, onGoToPage }) {
  const [selectedUrl, setSelectedUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    // Set first URL as default when modal opens
    if (isOpen && urls.length > 0 && !selectedUrl) {
      setSelectedUrl(urls[0]);
    }
    // Reset error when modal opens
    if (isOpen) {
      setError('');
    }
  }, [isOpen, urls]);
  
  // Reset loading state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsLoading(false);
      setError('');
    }
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  // Helper function to check if extension context is valid
  const isExtensionContextValid = () => {
    try {
      return chrome.runtime && chrome.runtime.id;
    } catch (e) {
      return false;
    }
  };
  
  const handleGoToPage = () => {
    if (!selectedUrl) return;
    
    // Check if extension context is valid before proceeding
    if (!isExtensionContextValid()) {
      setError('Extension was updated. Please refresh the page and try again.');
      setTimeout(() => {
        onClose();
      }, 2000);
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Call parent handler
    try {
      onGoToPage(selectedUrl);
    } catch (error) {
      console.error('Error in onGoToPage:', error);
      setError('Failed to open page. Please try again.');
      setIsLoading(false);
    }
    
    // Auto-close loading state after timeout if still loading
    // This prevents indefinite loading state
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
        setError('Taking too long. Please try again.');
      }
    }, 5000);
  };
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999999,
      backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        backgroundColor: '#1a1a1a',
        borderRadius: '12px',
        width: '420px',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        animation: 'modalSlideIn 0.3s ease-out'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <button
              onClick={onClose}
              disabled={isLoading}
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '6px',
                color: 'white',
                fontSize: '18px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isLoading ? 0.5 : 1,
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              ←
            </button>
            <div style={{ flex: 1 }}>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '600',
                margin: 0,
                color: '#fff'
              }}>
                Select Elements
              </h2>
              <p style={{
                margin: '4px 0 0 0',
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                Select elements to extract from each URL
              </p>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div style={{
          padding: '24px'
        }}>
          <div style={{
            marginBottom: '20px'
          }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '8px'
            }}>
              Select URL to extract from:
            </label>
            <select
              value={selectedUrl}
              onChange={(e) => setSelectedUrl(e.target.value)}
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '10px 12px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '8px',
                color: 'white',
                fontSize: '14px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.5 : 1,
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(99, 102, 241, 0.5)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              {urls.map((url, index) => (
                <option 
                  key={index} 
                  value={url}
                  style={{
                    backgroundColor: '#1a1a1a',
                    color: 'white'
                  }}
                >
                  {url}
                </option>
              ))}
            </select>
          </div>
          
          {/* Selected URL Display */}
          {selectedUrl && (
            <div style={{
              padding: '12px',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              marginBottom: '20px',
              fontSize: '13px',
              color: 'rgba(255, 255, 255, 0.8)',
              wordBreak: 'break-all'
            }}>
              <strong>Selected:</strong> {selectedUrl}
            </div>
          )}
          
          {/* Error Message */}
          {error && (
            <div style={{
              padding: '12px',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              marginBottom: '20px',
              fontSize: '13px',
              color: '#f87171',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ fontSize: '16px' }}>⚠️</span>
              {error}
            </div>
          )}
          
          {/* Action Button */}
          <button
            onClick={handleGoToPage}
            disabled={!selectedUrl || isLoading}
            style={{
              width: '100%',
              padding: '12px 24px',
              backgroundColor: '#6366f1',
              backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '8px',
              color: 'white',
              fontSize: '15px',
              fontWeight: '600',
              cursor: !selectedUrl || isLoading ? 'not-allowed' : 'pointer',
              opacity: !selectedUrl || isLoading ? 0.6 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
            }}
            onMouseEnter={(e) => {
              if (selectedUrl && !isLoading) {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 6px 16px rgba(99, 102, 241, 0.4)';
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
            }}
          >
            {isLoading ? (
              <>
                <div style={{
                  width: '16px',
                  height: '16px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderTopColor: 'white',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }} />
                Opening page...
              </>
            ) : (
              <>
                Go to page to select elements
              </>
            )}
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}} />
    </div>
  );
} 