import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';
import Progress from './Progress';
import QuestionCard from './QuestionCard';

/**
 * QuizContainer – all quiz state and UI.
 * This component is imported by src/pages/Quiz.jsx and renders the full quiz page.
 */
export default function QuizContainer() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const options = ['Styling websites', 'Mobile Apps', 'Building UI', 'Server rendering'];
  const currentQ = 1; // placeholder – could be managed with more state later
  const totalQ = 10;

  const handleTimeUp = () => {
    // when timer finishes, navigate to result page
    navigate('/result');
  };

  const handleNext = () => {
    // placeholder: go to result directly
    navigate('/result');
  };

  return (
    <div className="quiz-wrapper">
      <div className="glass-card">
        {/* Nav */}
        <div className="quiz-nav">
          <span className="quiz-nav-brand">⚡ QuizApp</span>
          <a href="/" className="quiz-nav-link">✕ Exit</a>
        </div>

        {/* Meta row */}
        <div className="question-meta">
          <span>Question {currentQ} of {totalQ}</span>
          <Timer duration={15} onTimeUp={handleTimeUp} />
        </div>

        {/* Progress bar */}
        <Progress current={currentQ} total={totalQ} />

        {/* Question Card */}
        <QuestionCard
          question="React is mainly used for building what?"
          options={options}
          selected={selected}
          onSelect={setSelected}
        />

        {/* Next button */}
        <button
          id="next-btn"
          className="btn-quiz-primary"
          style={{ marginTop: '0.5rem' }}
          onClick={handleNext}
        >
          Next Question →
        </button>
      </div>
    </div>
  );
}
