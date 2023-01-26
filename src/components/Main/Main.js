import React, { useContext } from 'react';
import { GameContext } from '../../Context/GameContext.js';
import PlayBox from '../PlayBox/PlayBox.js';
import './Main.css';

export default function Main() {

  const { selectedBox, currentPlayer } = useContext(GameContext);

  // hardcode for styling purposes
  return (
    <div>
      <section>
        <h1>You selected {selectedBox}</h1>
        <h3>{currentPlayer} it is your turn!</h3>
        {/* <h2>Cats Game!</h2> */}
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