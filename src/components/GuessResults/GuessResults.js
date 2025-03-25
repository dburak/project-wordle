import React from 'react';

const GuessResults = ({ guessHistory }) => {
  return (
    <div className='guess-results'>
      {guessHistory.map(({ guess, id }) => (
        <p key={id} className='guess'>
          {guess}
        </p>
      ))}
    </div>
  );
};

export default GuessResults;
