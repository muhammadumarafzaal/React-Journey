import React from 'react';
import AutoSaveForm from './components/AutoSaveForm';
import ChatRoom from './components/ChatRoom';
import './App.css';

function App() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header animate-fade-in">
        <div className="header-badge">React Hooks Deep-Dive</div>
        <h1>useEffect <span>&</span> useEffectEvent</h1>
        <p className="header-subtitle">
          Mastering the separation of <strong>Reactive Dependencies</strong> (State/Props) 
          and <strong>Non-Reactive Logic</strong> (Events).
        </p>
      </header>

      <main className="dashboard-grid">
        <section className="dashboard-column">
           <AutoSaveForm />
        </section>
        
        <section className="dashboard-column">
           <ChatRoom />
        </section>
      </main>
      
      <footer className="dashboard-footer">
        <p>Built to demonstrate the power of React's latest effect synchronization patterns.</p>
        <div className="footer-links">
          <a href="https://react.dev/learn/separating-events-from-effects" target="_blank" rel="noreferrer">
            Read React Docs
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
