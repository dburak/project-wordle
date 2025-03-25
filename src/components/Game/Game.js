import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Guess from '../Guess';

// Pick a random word on every pageload.

// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guessHistory, setGuessHistory] = useState([]);
  const [gameResult, setGameResult] = useState(undefined);
  const [answer, setAnswer] = useState(sample(WORDS));

  function addGameHistory(value) {
    const actualGuess = {
      guess: value,
      id: Math.random(),
    };

    setGuessHistory([...guessHistory, actualGuess]);
  }

  const handleRestartGame = () => {
    setGuessHistory([]);
    setGameResult(undefined);
    setAnswer(sample(WORDS));
  };

  return (
    <>
      <Guess
        guessHistory={guessHistory}
        answer={answer}
        setGameResult={setGameResult}
      />
      {/* <GuessResults guessHistory={guessHistory} /> */}
      {!gameResult ? (
        <GuessInput addGameHistory={addGameHistory} />
      ) : (
        <div style={{ zIndex: 999, marginBottom: 90 }}>
          <button onClick={handleRestartGame}>Restart Game</button>
        </div>
      )}

      {gameResult &&
        (gameResult === 'WIN' ? (
          <div className='happy banner'>
            <p>
              <strong>Congratulations!</strong> Got it in {''}
              <strong>{guessHistory.length}</strong>.
            </p>
          </div>
        ) : (
          <div className='sad banner'>
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          </div>
        ))}
    </>
  );
}

export default Game;
