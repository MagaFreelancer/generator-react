export type Card = {
  id: number;
  imgUrl: string;
  title: string;
  type: string;
  active: boolean;
};

export interface ICardState {
  type: string;
  count: number;
  activeCards: Card[];
  cards: Card[];
  btns: Btns[];
}
export type Btns = {
  type: string;
  count: number;
  text: string;
};
export interface ICardsProps {
  cards: Card[];
  type: string;
  count: number;
  activeCards: Card[];
}
export interface IActivedCardsProps {
  activeCards: Card[];
}
