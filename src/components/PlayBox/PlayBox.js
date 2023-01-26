import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext.js';
import './PlayBox.css';

export default function PlayBox({ box }) {
  const { setSelectedBox } = useContext(GameContext);

  function handleBoxClick() {
    setSelectedBox(box);
  }


  return (
    <div className='play-box' onClick={handleBoxClick}>
      <h1>PlayBox Number {box}</h1>
    </div>
  );
}
