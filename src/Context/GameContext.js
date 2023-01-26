const { createContext, useState } = require('react');


const GameContext = createContext();

const GameProvider = ({ children }) => {
  // game state
  const [value, setValue] = useState([]);
  

  // functions


  return <GameContext.Provider value={{ 
    // props
  }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };

