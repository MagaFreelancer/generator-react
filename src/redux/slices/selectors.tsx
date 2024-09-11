import { RootState } from '../store';

export const filtredCardsSelector = (state: RootState) => {
  return state.creator.cards
    .filter((card) => card.type === state.creator.type)
    .splice(0, state.creator.count);
};
export const cardsSelector = (state: RootState) => state.creator.cards;

export const typeSelector = (state: RootState) => state.creator.type;

export const countSelector = (state: RootState) => state.creator.count;

export const activeCardsSelector = (state: RootState) =>
  state.creator.activeCards;

export const btnsSelector = (state: RootState) => state.creator.btns;
