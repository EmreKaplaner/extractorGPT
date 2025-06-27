import React, { useContext } from 'react';
import { GlobalStateContext } from '../../../state-management/global-state-provider';
import { ExtractStateContext } from '../../../state-management/extract-state-provider';
import { RunStatus } from '../../../constants';

/**
 * ExtractButton - Extraction trigger button
 * Handles starting/stopping extraction process
 */
export function ExtractButton({ onClick, disabled = false }) {
  const { globalState } = useContext(GlobalStateContext);
  const { extractState, startExtraction, stopExtraction } = useContext(ExtractStateContext);
  
  const isRunning = extractState.status === RunStatus.RUNNING;
  const isStopping = extractState.status === RunStatus.STOPPING;
  
  const handleClick = () => {
    if (isRunning) {
      stopExtraction();
    } else {
      if (onClick) {
        onClick();
      } else {
        startExtraction();
      }
    }
  };
  
  const getButtonText = () => {
    if (isStopping) return 'Stopping...';
    if (isRunning) return 'Stop Extraction';
    return 'Start Extraction';
  };
  
  const getButtonClass = () => {
    let baseClass = 'panda-extract-choice-button extract-button';
    if (isRunning) baseClass += ' running';
    if (isStopping) baseClass += ' stopping';
    if (disabled) baseClass += ' disabled';
    return baseClass;
  };
  
  return (
    <button
      className={getButtonClass()}
      onClick={handleClick}
      disabled={disabled || isStopping}
    >
      <span className="button-icon">
        {isRunning ? '⏸' : '▶'}
      </span>
      <span className="button-text">
        {getButtonText()}
      </span>
    </button>
  );
}

export default ExtractButton; 