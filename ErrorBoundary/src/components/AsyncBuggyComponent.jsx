import React, { useState } from 'react';

function AsyncBuggyComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Re-throw the error during render so the Error Boundary can catch it
  if (error) {
    throw error;
  }

  const triggerAsyncCrash = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        // Simulating a failed HTTP request or async calculation
        throw new Error('Async Network Exception: Connection timed out while requesting resource "api/v2/metrics".');
      } catch (err) {
        // Throwing within an async callback will not be caught by Error Boundaries.
        // We set the state and throw it in the render path to let the Error Boundary catch it.
        setError(err);
      }
    }, 1500);
  };

  return (
    <div className="demo-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <h4>Asynchronous Request Crash</h4>
        <span className="status-badge badge-success">Operational</span>
      </div>
      <p>
        Simulate an asynchronous background call that fails. We propagate the callback exception into the render loop so it is handled by the boundary.
      </p>
      <button 
        className="btn btn-danger" 
        onClick={triggerAsyncCrash}
        disabled={loading}
      >
        {loading ? '⏳ Simulating Request...' : '🌐 Trigger Async Crash'}
      </button>
    </div>
  );
}

export default AsyncBuggyComponent;
