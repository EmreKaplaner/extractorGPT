import React from 'react';

export function ExtractionProgress({ totalUrls, processedUrls, status, onStop }) {
  const progress = totalUrls > 0 ? (processedUrls / totalUrls) * 100 : 0;
  const isRunning = status === 'running' || status === 'processing';
  
  return (
    <div style={{
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      borderRadius: '12px',
      padding: '16px',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      marginBottom: '16px'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '12px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: isRunning ? '#10b981' : '#6b7280',
            borderRadius: '50%',
            animation: isRunning ? 'pulse 2s infinite' : 'none'
          }} />
          <span style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#fff'
          }}>
            {isRunning ? 'Extraction in Progress' : 
             status === 'completed' ? 'Extraction Complete' : 
             'Extraction Stopped'}
          </span>
        </div>
        
        {isRunning && (
          <button
            onClick={onStop}
            style={{
              padding: '6px 12px',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '6px',
              color: '#ef4444',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
            }}
          >
            <span style={{ fontSize: '16px' }}>■</span>
            Stop
          </button>
        )}
      </div>
      
      {/* Progress Info */}
      <div style={{
        fontSize: '13px',
        color: 'rgba(255, 255, 255, 0.7)',
        marginBottom: '8px'
      }}>
        Processed {processedUrls} of {totalUrls} URLs
      </div>
      
      {/* Progress Bar */}
      <div style={{
        width: '100%',
        height: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '4px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#6366f1',
          backgroundImage: 'linear-gradient(135deg, #6366f1 25%, #7c3aed 25%, #7c3aed 50%, #6366f1 50%, #6366f1 75%, #7c3aed 75%, #7c3aed)',
          backgroundSize: '20px 20px',
          transition: 'width 0.3s ease',
          animation: isRunning ? 'progress-stripes 1s linear infinite' : 'none'
        }} />
      </div>
      
      {/* Time Estimate */}
      {isRunning && processedUrls > 0 && (
        <div style={{
          fontSize: '12px',
          color: 'rgba(255, 255, 255, 0.5)',
          marginTop: '8px'
        }}>
          {(() => {
            const avgTimePerUrl = 3; // seconds
            const remainingUrls = totalUrls - processedUrls;
            const estimatedSeconds = remainingUrls * avgTimePerUrl;
            const minutes = Math.floor(estimatedSeconds / 60);
            const seconds = estimatedSeconds % 60;
            
            if (minutes > 0) {
              return `Estimated time remaining: ${minutes}m ${seconds}s`;
            }
            return `Estimated time remaining: ${seconds}s`;
          })()}
        </div>
      )}
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes progress-stripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 20px 20px;
          }
        }
      `}</style>
    </div>
  );
} 
 
 