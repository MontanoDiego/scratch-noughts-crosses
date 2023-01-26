const { createContext, useState } = require('react');


const GameContext = createContext();

const GameProvider = ({ children }) => {
  // game state
  const [boxFlag, setBoxFlag] = useState(false);
  const [selectedBox, setSelectedBox] = useState();
  const [currentPlayer, setCurrentPlayer] = useState('X');
  

  // functions


  return <GameContext.Provider value={{ 
    boxFlag, setBoxFlag,
    selectedBox, setSelectedBox,
    currentPlayer, setCurrentPlayer
  }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };

