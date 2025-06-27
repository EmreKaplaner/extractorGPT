import React, { useContext } from 'react';
import { GlobalStateContext } from '../../../state-management/global-state-provider';
import UserStateContext from '../../../state-management/user-state-provider';
import { ExtractStateContext } from '../../../state-management/extract-state-provider';
import { RunStatus } from '../../../constants';

/**
 * StatusBubble - Status indicator component
 * Shows current extraction status and user tier
 */
export function StatusBubble({ onClick, position = 'bottom-right' }) {
  const { extractState, extractEmailState } = useContext(ExtractStateContext);
  const { userState } = useContext(UserStateContext);
  
  // Determine overall status
  const getStatus = () => {
    if (extractState.status === RunStatus.RUNNING || 
        extractEmailState.status === RunStatus.RUNNING) {
      return 'running';
    }
    if (extractState.status === RunStatus.ERROR || 
        extractEmailState.status === RunStatus.ERROR) {
      return 'error';
    }
    if (extractState.status === RunStatus.COMPLETED || 
        extractEmailState.status === RunStatus.COMPLETED) {
      return 'completed';
    }
    return 'idle';
  };
  
  const status = getStatus();
  const isPro = userState.tier === 'PRO';
  
  const getStatusIcon = () => {
    switch (status) {
      case 'running':
        return '🔄';
      case 'error':
        return '❌';
      case 'completed':
        return '✅';
      default:
        return '⭐';
    }
  };
  
  const getStatusText = () => {
    switch (status) {
      case 'running':
        return 'Extracting...';
      case 'error':
        return 'Error occurred';
      case 'completed':
        return 'Extraction complete';
      default:
        return isPro ? 'PRO' : 'FREE';
    }
  };
  
  const getStatusClass = () => {
    let baseClass = 'panda-extract status-bubble';
    baseClass += ` status-${status}`;
    baseClass += ` position-${position}`;
    if (isPro) baseClass += ' tier-pro';
    return baseClass;
  };
  
  return (
    <div 
      className={getStatusClass()}
      onClick={onClick}
      title={`Click to ${onClick ? 'toggle panel' : 'view status'}`}
    >
      <span className="status-icon">
        {getStatusIcon()}
      </span>
      <span className="status-text">
        {getStatusText()}
      </span>
      {status === 'running' && (
        <span className="status-progress">
          {Math.round(extractState.progress || 0)}%
        </span>
      )}
    </div>
  );
}

export default StatusBubble; 