import React, { useContext, useState } from 'react';
import { Typography, Button, Container } from '../../components';
import { GameContext } from '../../contexts/GameContext';
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from '../../constants/routes';
import { XorO } from '../Game/components';
import { XOHolder } from './components';

export const Start = () => {
  const { setPlayer, setTurn, player } = useContext(GameContext);
  const navigate = useNavigate();
  const onClickMatch = () => {
    navigate(pageRoutes.GAME);
  };

  const onClickX = () => {
    setPlayer('X');
    setTurn('X');
  };
  const onClickO = () => {
    setPlayer('O');
    setTurn('O');
  };
  return (
    <Container>
      <Typography>Welcome</Typography>
      <Typography>Pick Your Player</Typography>
      <XOHolder>
        <XorO
          onClick={onClickX}
          style={{
            borderBottom:
              player == 'X'
                ? '5px solid limeGreen'
                : '5px solid white',
          }}
        >
          X
        </XorO>
        <XorO
          style={{
            borderBottom:
              player == 'O'
                ? '5px solid limeGreen'
                : '5px solid white',
          }}
          onClick={onClickO}
        >
          O
        </XorO>
      </XOHolder>
      <Button onClick={onClickMatch}>MATCH WITH MY OPPONENT</Button>
    </Container>
  );
};
