import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext.js';
import './PlayBox.css';

export default function PlayBox({ box }) {
  const { 
    currentPlayer, setCurrentPlayer,
    setSelectedBox,
    boxValues, setBoxValues,
    boxFlag, setBoxFlag } = useContext(GameContext);

  function handleBoxClick() {
    setSelectedBox(box);
    setBoxFlag({ ...boxFlag, [box]: true });

    if (!boxFlag[box]) {
      setBoxValues({ ...boxValues, [box]: currentPlayer });
    }


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
