import styled from 'styled-components';
import { Typography } from '../../components';

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export const Spot = styled.div`
  height: 90px;
  width: 90px;
  outline: 1px solid grey;
  display: grid;
  place-items: center;
`;

export const XorO = styled(Typography)`
  font-size: 80px;
  margin: 0;
  padding: 0;
`;
