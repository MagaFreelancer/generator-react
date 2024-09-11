export type TCard = {
  id: number;
  imgUrl: string;
  title: string;
  type: string;
  active: boolean;
};
export interface ICardState {
  type: string;
  count: number;
  activeCards: TCard[];
  cards: TCard[];
  btns: TBtn[];
}
export type TBtn = {
  type: string;
  count: number;
  text: string;
};
