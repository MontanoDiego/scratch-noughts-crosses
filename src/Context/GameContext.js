const { createContext, useState } = require('react');


const GameContext = createContext();

const GameProvider = ({ children }) => {
  // game state
  const [boxFlag, setBoxFlag] = useState(false);
  const [selectedBox, setSelectedBox] = useState();
  const [currentPlayer, setCurrentPlayer] = useState('X');
  let [boxValues, setBoxValues] = useState({
    1: '',
    2: '',
    3: '',
  });
  

  // functions

  return <GameContext.Provider value={{ 
    boxFlag, setBoxFlag,
    selectedBox, setSelectedBox,
    currentPlayer, setCurrentPlayer,
    boxValues, setBoxValues
  }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };

