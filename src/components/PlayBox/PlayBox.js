import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext.js';
import './PlayBox.css';

export default function PlayBox({ box }) {
  const { 
    currentPlayer, setCurrentPlayer,
    boxValues, setBoxValues,
    boxFlag, setBoxFlag, 
    setActiveGame, activeGame,
    isWinningState, checkWinner, setWinText } = useContext(GameContext);
  
  checkWinner();
  const allBoxesChecked = Object.values(boxFlag).every(flag => flag === true);
  if (allBoxesChecked) {
    setWinText('Cat\'s Game!!');
    setActiveGame(false);
  }

  function handleBoxClick() {
    const currentBoxState = boxFlag[box];
    isWinningState(boxValues);

    if (activeGame === true) {
      if (!currentBoxState) {
        setBoxValues({ ...boxValues, [box]: currentPlayer });
        setBoxFlag({ ...boxFlag, [box]: true });

        if (currentPlayer === 'X') {
          setCurrentPlayer('O');
        } else {
          setCurrentPlayer('X');
        }
      }

      // const allBoxesChecked = Object.values(boxFlag).every(flag => flag === true);
      // if (allBoxesChecked) {
      //   setWinText('Cat\'s Game!!');
      //   setActiveGame(false);
      // }
    }
  }
  
  
  
  
  return (
    <div className='play-box' onClick={handleBoxClick}>
      <h2>{boxValues[box]}</h2>
    </div>
  );
}
