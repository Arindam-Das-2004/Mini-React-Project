import { useState } from "react";
import styled from "styled-components";


const RollDice = ({ currentDice, setCurrentDice, selectedNumber, score, setScore }) => {
  const [rolling, setRolling] = useState(false);
  const diceNames = ["one", "two", "three", "four", "five", "six"];

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      alert("Please select a number before rolling the dice!");
      return;
    }

    const audio = new Audio("/dice-roll.mp3");
    audio.play();

    setRolling(true);
    setTimeout(() => {
      const randomNumber = generateRandomNumber(1, 7);
      setCurrentDice(randomNumber);

      // Check for score update
      if (randomNumber === selectedNumber) {
        setScore((prev) => prev + 10);
      } else {
        setScore((prev) => (prev - 5 < 0 ? 0 : prev - 5));
      }

      setRolling(false);
    }, 500);
  };

  const resetDice = () => {
    setCurrentDice(1);
  };

  return (
    <DiceContainer rolling={rolling}>
      <div className="dice">
        <img
          src={`/${diceNames[currentDice - 1]}.png`}
          alt={`dice_${currentDice}`}
        />
      </div>
      <p>Click "Roll Dice" to play</p>
      <div className="buttons">
        <button onClick={rollDice}> Roll Dice</button>
        <button onClick={resetDice}> Reset</button>
      </div>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    margin-bottom: 16px;

    img {
      width: 150px;
      height: auto;
      object-fit: contain;
      animation: ${(props) => (props.rolling ? "shake 0.5s" : "none")};
    }
  }

  .buttons {
    display: flex;
    gap: 12px;
    margin-top: 16px;

    button {
      padding: 10px 16px;
      font-size: 16px;
      font-weight: 600;
      background-color: black;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #c7d867;
        color: black;
      }
    }
  }

  p {
    font-size: 20px;
    margin-top: 8px;
  }

  @keyframes shake {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(10deg); }
    50% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
    100% { transform: rotate(0deg); }
  }
`;
