import React, { useContext, useState, useEffect } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { Container, Typography, Button } from '../../components';
import { Board, Spot, XorO } from './components';
import { checkDraw, checkWin } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { pageRoutes } from '../../constants/routes';

const startBoard = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

export const Game = () => {
  const { turn, setTurn, player, result, setResult, setPlayer } =
    useContext(GameContext);
  const [board, setBoard] = useState(startBoard);
  const [resultWords, setResultWords] = useState(null);
  const navigate = useNavigate();
  const makeMove = (index) => {
    let newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    let newTurn = turn == 'O' ? 'X' : 'O';
    setTurn(newTurn);
  };
  const computerTurn = () => {
    let choice = Math.floor(Math.random() * 9);
    while (board[choice] != null) {
      choice = Math.floor(Math.random() * 9);
    }
    setTimeout(() => {
      makeMove(choice);
    }, 3000);
  };

  useEffect(() => {
    if (checkWin(board)) {
      setResult(checkWin(board));
      setResultWords(`${checkWin(board)} Wins!`);
    } else if (checkDraw(board)) {
      setResult('draw');
      setResultWords('There has been a draw!');
    } else if (turn !== player) {
      computerTurn();
    }
  }, [board]);

  return (
    <Container>
      {!!!result ? (
        <Typography>{turn}'s Turn</Typography>
      ) : (
        <Typography>{resultWords}</Typography>
      )}
      <Board>
        {board.map((value, index) => {
          return (
            <Spot
              onClick={() => {
                makeMove(index);
              }}
            >
              <XorO>{value}</XorO>
            </Spot>
          );
        })}
      </Board>
      {!!result && (
        <div>
          <Button
            onClick={() => {
              setResult(null);
              setTurn(null);
              setPlayer(null);
              navigate(pageRoutes.START);
            }}
            style={{ marginBottom: '20px' }}
          >
            PLAY AGAIN
          </Button>
          <br />
          <Button
            onClick={() => {
              navigate(pageRoutes.END);
            }}
          >
            SEE RECORD
          </Button>
        </div>
      )}
    </Container>
  );
};
