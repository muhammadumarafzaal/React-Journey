import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/useQuiz';

export default function Home() {
  const [name, setName] = React.useState('');
  const navigate = useNavigate();
  const { dispatch } = useQuiz();

  const handleStart = () => {
    if (name.trim()) {
      dispatch({ type: 'SET_PLAYER', payload: name });
      navigate('/quiz');
    }
  };

  return (
    <div className="quiz-wrapper">
      <div className="glass-card" style={{ textAlign: 'center' }}>
        {/* Badge */}
        <div className="quiz-badge">⚡ React Quiz Challenge</div>
        {/* Title */}
        <h1 className="quiz-title">Test Your React<br />Knowledge</h1>
        <p className="quiz-sub">
          10 questions · Timed · Ranked on leaderboard
        </p>
        {/* Input */}
        <input
          id="player-name"
          className="quiz-input"
          type="text"
          placeholder="Enter your name to begin..."
          autoComplete="off"
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleStart()}
        />
        {/* Start button */}
        <button
          id="start-btn"
          className="btn-quiz-primary"
          onClick={handleStart}
          disabled={!name.trim()}
          style={{ opacity: name.trim() ? 1 : 0.5, cursor: name.trim() ? 'pointer' : 'not-allowed' }}
        >
          Start Quiz →
        </button>
        <div className="divider" />
        {/* Leaderboard link */}
        <a href="/leaderboard" className="quiz-nav-link">
          🏆 View Leaderboard
        </a>
      </div>
    </div>
  );
}