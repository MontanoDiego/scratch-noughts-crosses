import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext.js';
import './PlayBox.css';

export default function PlayBox({ box }) {
  const { 
    currentPlayer, setCurrentPlayer,
    setSelectedBox, selectedBox,
    boxValues, setBoxValues } = useContext(GameContext);

  function handleBoxClick() {
    setSelectedBox(box);
    setBoxValues({ ...boxValues, [box]: currentPlayer });
    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
  }
    
  
  return (
    <div className='play-box' onClick={handleBoxClick}>
      <h1>PlayBox Number {box}</h1>
      <h2>{boxValues[box]}</h2>
    </div>
  );
}
