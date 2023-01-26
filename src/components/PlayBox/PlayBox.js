import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext.js';
import './PlayBox.css';

export default function PlayBox({ box }) {
  const { setSelectedBox, currentPlayer, setCurrentPlayer } = useContext(GameContext);

  function handleBoxClick() {
    setSelectedBox(box);

    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
  }


  return (
    <div className='play-box' onClick={handleBoxClick}>
      <h1>PlayBox Number {box}</h1>
    </div>
  );
}
