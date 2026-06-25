import React, { useEffect, useState } from 'react';

/**
 * Timer component displays a countdown bar.
 * Props:
 *   - duration: total time in seconds (default 15)
 *   - onTimeUp: callback invoked when timer reaches zero
 */
export default function Timer({ duration = 15, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeUp) onTimeUp();
      return;
    }
    const id = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, onTimeUp]);

  const percent = (timeLeft / duration) * 100;
  const barColor = timeLeft <= 5 ? '#ff4444' : 'var(--white)';

  return (
    <div className="timer-bar-wrap">
      <div className="timer-bar" style={{ width: `${percent}%`, background: barColor }} />
    </div>
  );
}
