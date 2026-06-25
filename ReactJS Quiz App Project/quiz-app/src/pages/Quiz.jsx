import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer';
import QuestionCard from '../components/QuestionCard';
import Progress from '../components/Progress';
import { useQuiz } from '../context/useQuiz';

export default function Quiz() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const { questions, current, finished, answers } = state;
  const [selected, setSelected] = useState(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (finished) {
      navigate('/result');
    }
  }, [finished, navigate]);

  useEffect(() => {
    setSelected(null);
  }, [current]);

  if (!questions.length) return <div>Loading questions...</div>;
  if (finished) return null;

  const q = questions[current];
  const totalQ = questions.length;

  const handleTimeUp = () => {
    handleNext();
  };

  const handleNext = () => {
    if (selected === null) return;
    dispatch({ type: 'ANSWER', payload: q.options[selected] });
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
          <span>Question {current + 1} of {totalQ}</span>
          <Timer duration={15} onTimeUp={handleTimeUp} />
        </div>
        {/* Progress bar for quiz progress */}
        <Progress current={current + 1} total={totalQ} />
        {/* Question Card */}
        <QuestionCard
          question={q.question}
          options={q.options}
          selected={selected}
          onSelect={setSelected}
        />
        {/* Next */}
        <button
          id="next-btn"
          className="btn-quiz-primary"
          style={{ marginTop: '0.5rem' }}
          onClick={handleNext}
          disabled={selected === null}
        >
          {current + 1 === totalQ ? 'Finish Quiz' : 'Next Question →'}
        </button>
      </div>
    </div>
  );
}