import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

export function useQuizLogic(questions) {
  const { state, dispatch } = useQuiz();

  useEffect(() => {
    if (questions && questions.length) {
      dispatch({ type: 'SET_QUESTIONS', payload: questions });
    }
    // eslint-disable-next-line
  }, [questions]);

  const setPlayerName = name => dispatch({ type: 'SET_PLAYER', payload: name });
  const answer = ans => dispatch({ type: 'ANSWER', payload: ans });
  const reset = () => dispatch({ type: 'RESET' });

  return {
    ...state,
    setPlayerName,
    answer,
    reset,
  };
}
