export const checkDraw = (board) => {
  const isNonNull = (currentValue) => currentValue !== null;

  return board.every(isNonNull);
};

export const checkWin = (board) => {
  if (
    !!(board[0] === board[1] && board[1] === board[2]) &&
    board[0] !== null
  ) {
    console.log('1');
    return board[0];
  }
  if (
    !!(board[3] === board[4] && board[4] === board[5]) &&
    board[3] !== null
  ) {
    console.log('2');
    return board[3];
  }
  if (
    !!(board[5] === board[6] && board[6] === board[7]) &&
    board[5] !== null
  ) {
    console.log('3');
    return board[5];
  }

  //check vertical

  if (
    !!(board[0] === board[3] && board[3] === board[6]) &&
    board[0] != null
  ) {
    console.log('4');
    return board[0];
  }
  if (
    !!(board[1] === board[4] && board[4] === board[7]) &&
    board[1] != null
  ) {
    console.log('5');
    return board[1];
  }
  if (
    !!(board[2] === board[5] && board[5] === board[8]) &&
    board[2] != null
  ) {
    console.log('6');
    return board[2];
  }

  //check diagnal
  if (
    !!(board[0] === board[4] && board[4] === board[8]) &&
    board[0] !== null
  ) {
    console.log('7');
    return board[0];
  }
  if (
    !!(board[2] === board[4] && board[4] === board[6]) &&
    board[2] !== null
  ) {
    console.log('8');
    return board[2];
  }

  return false;
};
