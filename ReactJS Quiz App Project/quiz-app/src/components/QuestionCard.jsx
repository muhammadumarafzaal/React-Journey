import React from 'react';

/**
 * QuestionCard component displays a question and its answer options.
 * Props:
 *   - question: string – the question text.
 *   - options: string[] – array of answer options.
 *   - selected: number | null – currently selected option index.
 *   - onSelect: (index: number) => void – callback when an option is chosen.
 */
export default function QuestionCard({ question, options, selected, onSelect }) {
  const LETTERS = ['A', 'B', 'C', 'D'];

  return (
    <>
      <p className="question-text">{question}</p>
      <div>
        {options.map((opt, i) => (
          <button
            key={i}
            id={`option-${i}`}
            className={`option-btn${selected === i ? ' option-selected' : ''}`}
            onClick={() => onSelect(i)}
          >
            <span className="option-letter">{LETTERS[i]}</span>
            {opt}
          </button>
        ))}
      </div>
    </>
  );
}
