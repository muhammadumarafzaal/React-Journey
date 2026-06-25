import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/useQuiz';

export default function Result() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const { playerName, score, questions } = state;
  const total = questions.length;
  const pct = total ? Math.round((score / total) * 100) : 0;

  const emoji = pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '😅';
  const msg   = pct >= 80 ? 'Excellent work!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';

  const handleRestart = () => {
    dispatch({ type: 'RESET' });
    navigate('/');
  };

  return (
    <div className="quiz-wrapper">
      <div className="glass-card" style={{ textAlign: 'center' }}>
        {/* Score ring */}
        <div className="score-ring">{emoji}</div>
        {/* Title */}
        <h1 className="quiz-title" style={{ fontSize: '1.9rem' }}>Quiz Complete!</h1>
        <p className="quiz-sub" style={{ marginBottom: '0.5rem' }}>
          Hey <strong style={{ color: '#fff' }}>{playerName || 'Player'}</strong>, {msg}
        </p>
        {/* Big score */}
        <div style={{
          fontSize: '3.5rem',
          fontWeight: 900,
          background: 'linear-gradient(135deg, #7c5cfc, #c471ed)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          margin: '1rem 0',
        }}>
          {score}<span style={{ fontSize: '1.6rem', opacity: 0.6 }}>/{total}</span>
        </div>
        {/* Stat pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <div className="stat-pill green">✓ {score} Correct</div>
          <div className="stat-pill red">✗ {total - score} Wrong</div>
          <div className="stat-pill cyan">🎯 {pct}%</div>
        </div>
        <div className="divider" />
        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            id="leaderboard-btn"
            className="btn-quiz-primary"
            style={{ flex: 1 }}
            onClick={() => navigate('/leaderboard')}
          >
            🏆 Leaderboard
          </button>
          <button
            id="home-btn"
            className="btn-quiz-secondary"
            style={{ flex: 1 }}
            onClick={handleRestart}
          >
            ← Home
          </button>
        </div>
      </div>
    </div>
  );
}