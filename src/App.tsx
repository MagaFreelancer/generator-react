import React from 'react';
import Controller from './components/controller';
import Cards from './components/cards';
import ActivedCards from './components/activedCards';

import './App.scss';
import { useAppSelector } from './utils/hook';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const { cards, type, count, activeCards } = useAppSelector(
    (state: RootState) => state.creator
  );
  return (
    <>
      <div className="generator">
        <Controller />
        <div className="field">
          <Cards
            activeCards={activeCards}
            cards={cards}
            type={type}
            count={count}
          />
          <ActivedCards activeCards={activeCards} />
        </div>
      </div>
    </>
  );
};

export default App;
