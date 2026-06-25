import React from 'react';

/**
 * Progress bar showing current quiz progress.
 * Props:
 *   - current: current question number (1‑based)
 *   - total: total number of questions
 */
export default function Progress({ current, total }) {
  const percent = (current / total) * 100;
  return (
    <div className="timer-bar-wrap">
      <div
        className="timer-bar"
        style={{ width: `${percent}%`, background: 'var(--white)' }}
      />
    </div>
  );
}
