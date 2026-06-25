import React from 'react'
import { useNavigate } from 'react-router-dom'

const MOCK_DATA = [
  { name: 'UmarAfzaal', score: 10, total: 10, pct: 100, date: '28 Apr 2026' },
  { name: 'Sanchit',    score: 8,  total: 10, pct: 80,  date: '28 Apr 2026' },
  { name: 'Ayesha',     score: 7,  total: 10, pct: 70,  date: '27 Apr 2026' },
  { name: 'Bilal',      score: 5,  total: 10, pct: 50,  date: '27 Apr 2026' },
]

const rankClass = i => ['rank-1','rank-2','rank-3'][i] ?? 'rank-n'
const rankIcon  = i => ['🥇','🥈','🥉'][i] ?? i + 1

export default function LeaderBoard() {
  const navigate = useNavigate()

  return (
    <div className="quiz-wrapper">
      <div className="glass-card" style={{ maxWidth: 720 }}>

        {/* Nav */}
        <div className="quiz-nav">
          <span className="quiz-nav-brand">⚡ QuizApp</span>
          <button
            id="home-nav-btn"
            className="btn-quiz-secondary"
            style={{ padding: '0.4rem 1rem', fontSize: '0.88rem' }}
            onClick={() => navigate('/')}
          >
            ← Home
          </button>
        </div>

        {/* Header */}
        <div className="quiz-badge">🏆 Rankings</div>
        <h1 className="quiz-title" style={{ fontSize: '2rem', marginBottom: '0.3rem' }}>Leaderboard</h1>
        <p className="quiz-sub">Top scorers from all sessions</p>

        {/* Table */}
        <table className="lb-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>Score</th>
              <th>Accuracy</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_DATA.map((row, i) => (
              <tr key={i}>
                <td>
                  <div className={`rank-badge ${rankClass(i)}`}>{rankIcon(i)}</div>
                </td>
                <td style={{ fontWeight: 600 }}>{row.name}</td>
                <td><span className="score-pill">{row.score}/{row.total}</span></td>
                <td>
                  <span style={{
                    color: row.pct >= 80 ? 'var(--green)' : row.pct >= 50 ? 'var(--yellow)' : 'var(--red)',
                    fontWeight: 700,
                  }}>
                    {row.pct}%
                  </span>
                </td>
                <td style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="divider" />

        <button
          id="clear-btn"
          className="btn-quiz-danger"
          style={{ width: '100%' }}
        >
          🗑 Clear Leaderboard
        </button>

      </div>
    </div>
  )
}