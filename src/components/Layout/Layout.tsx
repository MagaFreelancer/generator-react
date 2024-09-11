import React from 'react';
import Controller from '../Controller';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import {
  activeCardsSelector,
  filtredCardsSelector,
} from '../../redux/slices/selectors';
import {
  addActiveCard,
  removeActiveCard,
} from '../../redux/slices/creatorSlice';
import TopCards from '../TopCards';
import BottomCards from '../BottomCards';

const Layout: React.FC = () => {
  const filterCards = useAppSelector(filtredCardsSelector);
  const activeCards = useAppSelector(activeCardsSelector);
  const dispatch = useAppDispatch();

  const onClickActiveCard = (id: number) => dispatch(addActiveCard({ id }));
  const onClickRemoveCard = (id: number) => dispatch(removeActiveCard(id));

  return (
    <div className="generator">
      <Controller />
      <div className="field">
        <TopCards
          onClick={onClickActiveCard}
          filterCards={filterCards}
          activeCards={activeCards}
        />
        <BottomCards onClick={onClickRemoveCard} activeCards={activeCards} />
      </div>
    </div>
  );
};

export default Layout;
