import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Start } from './pages/Start';
import { End } from './pages/End';
import { Game } from './pages/Game';
import { pageRoutes } from './constants/routes';
import { GameContextWrapper } from './contexts/GameContext';
const App = () => {
  return (
    <GameContextWrapper>
      <Routes>
        <Route path={pageRoutes.START} element={<Start />} />
        <Route path={pageRoutes.GAME} element={<Game />} />
        <Route path={pageRoutes.END} element={<End />} />
      </Routes>
    </GameContextWrapper>
  );
};

export default App;
