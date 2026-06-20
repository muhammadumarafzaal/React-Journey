import React, { useState } from 'react';

function BuggyComponent() {
  const [shouldCrash, setShouldCrash] = useState(false);

  if (shouldCrash) {
    // Simulate a render-time JavaScript exception
    throw new Error('Render Exception: Cannot read property "metadata" of undefined (triggered manually).');
  }

  return (
    <div className="demo-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <h4>Render-Time Crash Demo</h4>
        <span className="status-badge badge-success">Operational</span>
      </div>
      <p>
        Click the button below to trigger a JavaScript rendering exception. This will immediately be caught by the surrounding Error Boundary.
      </p>
      <button className="btn btn-danger" onClick={() => setShouldCrash(true)}>
        💥 Trigger Render Crash
      </button>
    </div>
  );
}

export default BuggyComponent;
