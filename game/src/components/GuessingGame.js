import React, { useState } from "react";
import "./GuessingGame.css";

const GuessingGame = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [userGuess, setUserGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [lastResult, setLastResult] = useState("");
  const [lowOrHi, setLowOrHi] = useState("");
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const checkGuess = () => {
    const parsedGuess = Number(userGuess);
    if (guessCount === 0) {
      setGuesses(["Previous guesses:"]);
    }

    setGuesses((prevGuesses) => [...prevGuesses, parsedGuess]);
    setGuessCount((prevCount) => prevCount + 1);

    if (parsedGuess === randomNumber) {
      setLastResult("Congratulations! You got it right!");
      setLowOrHi("");
      setGameOver(true);
    } else if (guessCount >= 9) {
      setLastResult("!!!GAME OVER!!!");
      setLowOrHi("");
      setGameOver(true);
    } else {
      setLastResult("Wrong!");
      if (parsedGuess < randomNumber) {
        setLowOrHi("Last guess was too low!");
      } else {
        setLowOrHi("Last guess was too high!");
      }
    }
    setUserGuess("");
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuesses([]);
    setUserGuess("");
    setLastResult("");
    setLowOrHi("");
    setGuessCount(0);
    setGameOver(false);
  };

  return (
    <div className="container">
      <h1>Number Guessing Game</h1>
      <p>
        We have selected a random number between 1 and 100. See if you can guess
        it in 10 turns or fewer. We'll tell you if your guess was too high or
        too low.
      </p>
      <label htmlFor="guessField">Enter a guess: </label>
      <input
        type="number"
        id="guessField"
        style={{ padding: "5px" }}
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        disabled={gameOver}
      />
      <input
        type="submit"
        style={{ marginLeft: "10px", padding: "5px" }}
        value="Submit guess"
        onClick={checkGuess}
        disabled={gameOver}
      />
      <div className="resultParas">
        <p className="guesses">{guesses.join(" ")}</p>
        <p
          className="lastResult"
          style={{
            backgroundColor: gameOver
              ? lastResult.includes("Congratulations")
                ? "green"
                : "red"
              : "white",
          }}
        >
          {lastResult}
        </p>
        <p className="lowOrHi">{lowOrHi}</p>
      </div>
      {gameOver && <button onClick={resetGame}>Start New Game</button>}
    </div>
  );
};

export default GuessingGame;
