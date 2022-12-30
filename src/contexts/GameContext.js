import React, { createContext, useState, useEffect } from 'react';

export const GameContext = createContext();

export const GameContextWrapper = ({ children }) => {
  const [player, setPlayer] = useState(null);
  const [turn, setTurn] = useState(null);
  const [result, setResult] = useState(null);
  const [wins, setWins] = useState(null);
  const [losses, setLosses] = useState(null);

  React.useEffect(() => {
    let localWins = localStorage.getItem('wins');
    let localLosses = localStorage.getItem('losses');
    setWins(localWins || 0);
    setLosses(localLosses || 0);
  }, []);

  React.useEffect(() => {
    if (result === player) {
      setWins(wins + 1);
      localStorage.setItem('wins', wins + 1);
    } else if (result !== 'draw' && !!result) {
      setLosses(losses + 1);
      localStorage.setItem('losses', losses + 1);
    }
  }, [result]);

  return (
    <GameContext.Provider
      value={{
        player,
        setPlayer,
        turn,
        setTurn,
        result,
        setResult,
        wins,
        losses,
        setWins,
        setLosses,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
