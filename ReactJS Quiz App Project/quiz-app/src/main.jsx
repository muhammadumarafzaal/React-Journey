import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { QuizProvider } from './context/QuizContext';
import questions from './data/questions.json';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizProvider questions={questions}>
      <App />
    </QuizProvider>
  </StrictMode>
);
