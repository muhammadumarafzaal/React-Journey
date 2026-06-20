import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import BuggyComponent from './components/BuggyComponent';
import AsyncBuggyComponent from './components/AsyncBuggyComponent';
import EventBuggyComponent from './components/EventBuggyComponent';

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <header className="header">
          <span className="logo">🛡️</span>
          <h1 className="title">Fault Tolerance Dashboard</h1>
          <p className="subtitle">
            Demonstrating React 19 Error Boundary capabilities. Isolate rendering failures, handle async exceptions, and prevent application crashes.
          </p>
        </header>

        <section className="panel full-width">
          <h3 className="panel-title">
            <span style={{ color: 'var(--accent-blue)' }}>●</span> Fault Isolation Strategy
          </h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Each component in the grid below is wrapped in its own separate <code>&lt;ErrorBoundary&gt;</code>. 
            If any single component crashes, the rest of the dashboard remains fully operational and interactive.
          </p>
        </section>

        <main className="dashboard-grid">
          {/* Card 1: Render-time crash simulation */}
          <div className="panel">
            <h3 className="panel-title">
              <span style={{ color: 'var(--accent-red)' }}>■</span> Render Isolation Boundary
            </h3>
            <p className="panel-subtitle">Catches standard rendering exceptions and allows live state resets.</p>
            <ErrorBoundary>
              <BuggyComponent />
            </ErrorBoundary>
          </div>

          {/* Card 2: Async error simulation */}
          <div className="panel">
            <h3 className="panel-title">
              <span style={{ color: 'var(--accent-purple)' }}>■</span> Asynchronous Boundary
            </h3>
            <p className="panel-subtitle">Handles network and data loading errors using state propagation.</p>
            <ErrorBoundary>
              <AsyncBuggyComponent />
            </ErrorBoundary>
          </div>

          {/* Card 3: Event handler errors */}
          <div className="panel full-width">
            <h3 className="panel-title">
              <span style={{ color: 'var(--accent-pink)' }}>■</span> Event Handler Isolation
            </h3>
            <p className="panel-subtitle">Demonstrates why event handlers bypass Error Boundaries and how to catch them locally.</p>
            <ErrorBoundary>
              <EventBuggyComponent />
            </ErrorBoundary>
          </div>
        </main>

        <footer className="footer">
          <p>&copy; 2026 Fault Tolerance Diagnostics Hub. Built with React 19 & Vite.</p>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
