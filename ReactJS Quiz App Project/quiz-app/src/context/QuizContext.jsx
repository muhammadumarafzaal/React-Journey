import { createContext, useReducer } from 'react';

const QuizContext = createContext();

const initialState = {
  playerName: '',
  questions: [],
  current: 0,
  answers: [],
  score: 0,
  finished: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case 'SET_PLAYER':
      return { ...state, playerName: action.payload };
    case 'SET_QUESTIONS':
      return { ...state, questions: action.payload };
    case 'ANSWER': {
      const isCorrect = state.questions[state.current].answer === action.payload;
      return {
        ...state,
        answers: [...state.answers, action.payload],
        score: isCorrect ? state.score + 1 : state.score,
        current: state.current + 1,
        finished: state.current + 1 >= state.questions.length,
      };
    }
    case 'RESET':
      return { ...initialState, questions: state.questions };
    default:
      return state;
  }
}

export function QuizProvider({ children, questions }) {
  const [state, dispatch] = useReducer(quizReducer, { ...initialState, questions });
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export { QuizContext };
