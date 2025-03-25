import React from 'react';

const GuessInput = ({ addGameHistory }) => {
  const [guessInput, setGuessInput] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      guess: guessInput,
    });

    addGameHistory(guessInput);

    setGuessInput('');
  };

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        title='5 letter word'
        id='guess-input'
        type='text'
        value={guessInput}
        onChange={(event) =>
          setGuessInput(event.target.value.toUpperCase())
        }
      />
    </form>
  );
};

export default GuessInput;
