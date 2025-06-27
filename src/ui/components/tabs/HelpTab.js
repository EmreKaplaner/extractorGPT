import React from 'react';

export function HelpTab({ isPro, onProToggle }) {
  const handleVideoTutorial = () => {
    window.open('https://youtube.com/watch?v=demo', '_blank');
  };
  
  const handleRequestFeature = () => {
    window.open('https://github.com/extractor-gpt/issues', '_blank');
  };
  
  const handleJoinCommunity = () => {
    window.open('https://discord.gg/extractor-gpt', '_blank');
  };
  
  return (
    <div>
      {/* Account Status */}
      <div style={{
        padding: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#7c3aed',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px'
          }}>
            🐼
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '600' }}>
              {isPro ? 'PRO Account' : 'FREE Account'}
            </div>
            <div style={{ fontSize: '12px', color: '#9ca3af' }}>
              {isPro ? 'All features unlocked' : 'Upgrade to PRO for premium features'}
            </div>
          </div>
        </div>
      </div>
      
      {/* Settings Section */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{
          margin: '0 0 12px 0',
          fontSize: '14px',
          fontWeight: '600',
          color: '#9ca3af',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Settings
        </h3>
        
        {!isPro && (
          <button
            onClick={() => onProToggle(true)}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#7c3aed',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '8px',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#6d28d9'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#7c3aed'}
          >
            <span>✨</span> Upgrade to PRO
          </button>
        )}
        
        <button
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '8px',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
        >
          <span>🔑</span> Register License
        </button>
        
        <button
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
        >
          <span>🎁</span> Purchase License
        </button>
      </div>
      
      {/* Help Section */}
      <div>
        <h3 style={{
          margin: '0 0 12px 0',
          fontSize: '14px',
          fontWeight: '600',
          color: '#9ca3af',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Help
        </h3>
        
        <button
          onClick={handleVideoTutorial}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '8px',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
        >
          <span>📹</span> Video Tutorials
        </button>
        
        <h3 style={{
          margin: '16px 0 12px 0',
          fontSize: '14px',
          fontWeight: '600',
          color: '#9ca3af',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Support
        </h3>
        
        <button
          onClick={handleRequestFeature}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '8px',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
        >
          <span>💡</span> Request Feature
        </button>
        
        <button
          onClick={handleJoinCommunity}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: 'white',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
        >
          <span>🎙️</span> Join Community
        </button>
      </div>
      
      {/* Version Info */}
      <div style={{
        marginTop: '32px',
        padding: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '8px',
        fontSize: '12px',
        color: '#6b7280',
        textAlign: 'center'
      }}>
        <div>ExtractorGPT v1.0.0</div>
        <div style={{ marginTop: '4px' }}>
          {isPro ? '✓ PRO License Active' : 'FREE Version'}
        </div>
      </div>
    </div>
  );
}

export default HelpTab; 