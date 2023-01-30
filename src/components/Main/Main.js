import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext.js';
import PlayBox from '../PlayBox/PlayBox.js';
import './Main.css';

export default function Main() {

  const { currentPlayer, winText, reset } = useContext(GameContext);

  // setSubWinText(`${currentPlayer}, it is your turn!`);
  // hardcode for styling purposes
  
  return (
    <div>
      <section>
        <h1>{winText}</h1>
        <h3>{currentPlayer}, it is your turn!</h3>
        <button onClick={reset}>Reset!</button>
      </section>
      <section className='box-container'>
        <PlayBox 
          box={1}
        />
        <PlayBox 
          box={2}
        />
        <PlayBox 
          box={3}
        />
        <PlayBox 
          box={4}
        />
        <PlayBox 
          box={5}
        />
        <PlayBox 
          box={6}
        />
        <PlayBox 
          box={7}
        />
        <PlayBox 
          box={8}
        />
        <PlayBox 
          box={9}
        />
      </section>
    </div>
  );
}