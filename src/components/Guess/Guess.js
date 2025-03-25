import { useEffect, useState } from 'react';
import { range } from '../../utils';
import { checkGuess } from '/src/game-helpers.js';
import { NUM_OF_GUESSES_ALLOWED } from '/src/constants';

const Guess = ({ guessHistory, answer, setGameResult }) => {
  const [answersChecked, setAnswersChecked] = useState([]);

  useEffect(() => {
    const checkedLetters = guessHistory.map((guessItem) => {
      return checkGuess(guessItem.guess, answer);
    });

    let result = false;

    checkedLetters.forEach((letters) => {
      result = letters.every((letter) => {
        return letter.status === 'correct';
      });
    });

    if (result) setGameResult('WIN');
    else if (guessHistory.length === NUM_OF_GUESSES_ALLOWED)
      setGameResult('LOSE');

    setAnswersChecked(checkedLetters);
  }, [guessHistory, answer, setGameResult]);

  return (
    <div className='guess-results'>
      {range(0, 6).map((i) => (
        <p key={i} className='guess'>
          {range(0, 5).map((k) => (
            <span
              key={k}
              className={`cell ${
                answersChecked.length > 0
                  ? answersChecked[i]?.[k].status
                  : ''
              }`}
            >
              {guessHistory[i]?.guess[k]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
};

export default Guess;
