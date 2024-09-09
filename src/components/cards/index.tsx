import React from 'react';
import { useAppDispatch } from '../../utils/hook';
import { addActiveCard } from '../../redux/slices/creatorSlice';
import { Card, ICardsProps } from '../../common/types';

const Cards: React.FC<ICardsProps> = (props): JSX.Element => {
  const { cards, type, count, activeCards } = props;
  const filtredCards: Card[] = cards
    .filter((item) => item.type === type)
    .splice(0, count);
  const dispatch = useAppDispatch();

  const onClickSelectCard = (e: React.MouseEvent<HTMLDivElement>): void => {
    const target = e.currentTarget.closest('.field__card') as HTMLDivElement;

    const id = Number(target.getAttribute('data-top'));
    dispatch(addActiveCard({ id }));
  };
  return (
    <div className="field__cards">
      {filtredCards.map((item: Card, index: number) => {
        const activeIndex =
          activeCards.length != 0 &&
          activeCards.findIndex((card: Card) => card.id === item.id);
        return (
          <div
            onClick={onClickSelectCard}
            key={index}
            className={`field__card field__card-top ${item.active && 'field__card--active'}`}
            data-top={`${item.id}`}
          >
            <img
              className="field__card-img"
              src={item.imgUrl}
              alt={item.title}
            />
            <div className="field__card-index">{Number(activeIndex) + 1}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
