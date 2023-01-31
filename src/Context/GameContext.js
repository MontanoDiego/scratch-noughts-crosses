const { createContext, useState } = require('react');


const GameContext = createContext();

const GameProvider = ({ children }) => {
  // game state
  const [winSymbol, setWinSymbol] = useState('');
  const [winText, setWinText] = useState('');
  const [activeGame, setActiveGame] = useState(true);
  const [selectedBox, setSelectedBox] = useState();
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [subWinText, setSubWinText] = useState('');
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
  

  // new
  

  // win con
  const isWinningState = (boxValues) => {
    const winStates = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
    for (const winState of winStates) {
      const [a, b, c] = winState;
      if (boxValues[a] === boxValues[b] && boxValues[b] === boxValues[c] && boxValues[a] !== '') {
        setWinSymbol(boxValues[a]);
        return true;
      }
    }
    return false;
  };

  // functions
  function checkWinner() {
    const winCon = isWinningState(boxValues);

    if (winCon === true) {
      setActiveGame('false');
      setWinText(`${winSymbol} Wins!!`);
      setSubWinText('');
    }
  }

  function reset() {
    window.location.reload();
  }


  return <GameContext.Provider value={{ 
    boxFlag, setBoxFlag,
    selectedBox, setSelectedBox,
    currentPlayer, setCurrentPlayer,
    boxValues, setBoxValues,
    activeGame, setActiveGame,
    isWinningState, checkWinner,
    winText, setWinText,
    subWinText, setSubWinText,
    reset
  }}>{children}</GameContext.Provider>;
};

export { GameContext, GameProvider };

