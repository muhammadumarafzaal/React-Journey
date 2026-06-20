import React, { useState } from 'react';

function EventBuggyComponent() {
  const [localError, setLocalError] = useState(null);

  const handleEventCrash = () => {
    try {
      // Simulate an error inside a button click handler
      throw new Error('Event Handler Exception: Database write failed due to validation constraint key constraint violations.');
    } catch (err) {
      // Since Error Boundaries do NOT catch event errors, we handle it here locally
      setLocalError(err.message);
    }
  };

  const handleClearError = () => {
    setLocalError(null);
  };

  return (
    <div className="demo-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <h4>Event Handler Exception (Local catch)</h4>
        <span className="status-badge badge-warning">Event Protected</span>
      </div>
      <p>
        React Error Boundaries do not catch errors inside click/input handlers. Click below to see how we catch them using local try/catch state.
      </p>

      {localError ? (
        <div style={{ 
          background: 'rgba(245, 158, 11, 0.1)', 
          border: '1px solid rgba(245, 158, 11, 0.3)', 
          padding: '1rem', 
          borderRadius: '6px', 
          marginBottom: '1rem' 
        }}>
          <strong style={{ color: '#fde68a', fontSize: '0.9rem', display: 'block', marginBottom: '0.25rem' }}>
            ⚠️ Caught Locally in Event:
          </strong>
          <code style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{localError}</code>
          <button 
            className="btn btn-secondary" 
            onClick={handleClearError}
            style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', marginTop: '0.5rem', display: 'block' }}
          >
            Clear Exception
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={handleEventCrash}>
          ⚡ Trigger Event Error
        </button>
      )}
    </div>
  );
}

export default EventBuggyComponent;
