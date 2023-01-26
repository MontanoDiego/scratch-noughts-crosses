const { createContext, useState } = require('react');


const GameContext = createContext();

const GameProvider = ({ children }) => {
  // game state
  const [activeGame, setActiveGame] = useState(true);
  const [selectedBox, setSelectedBox] = useState();
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [boxValues, setBoxValues] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
  });
  const [boxFlag, setBoxFlag] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false
  });
  

  // functions



  return <GameContext.Provider value={{ 
    boxFlag, setBoxFlag,
    selectedBox, setSelectedBox,
    currentPlayer, setCurrentPlayer,
    boxValues, setBoxValues,
    activeGame, setActiveGame
  }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };

