import React, { useContext } from 'react';
import { Container, Typography, Button } from '../../components';
import { GameContext } from '../../contexts/GameContext';
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from '../../constants/routes';

export const End = () => {
  const { result, wins, losses, setResult } = useContext(GameContext);
  const navigate = useNavigate();

  const onPressPlayAgain = () => {
    setResult(null);
    navigate(pageRoutes.START);
  };
  return (
    <Container>
      <Typography>
        {result == 'draw'
          ? 'The game ends in a draw'
          : `${result} has won!`}
      </Typography>
      <Typography>
        You have {wins} wins and {losses} losses
      </Typography>
      <Button onClick={onPressPlayAgain}>PLAY AGAIN</Button>
    </Container>
  );
};
