import React from 'react';
import Card from './Card';
import { TCard } from '../common/types';
interface ITopCardsProps {
  onClick: (id: number) => void;
  filterCards: TCard[];
  activeCards: TCard[];
}
const TopCards: React.FC<ITopCardsProps> = ({
  onClick,
  filterCards,
  activeCards,
}: ITopCardsProps) => {
  return (
    <div className="field__cards">
      {filterCards.map((item) => {
        const activeIndex =
          activeCards.length != 0
            ? Number(activeCards.findIndex((card) => card.id === item.id)) + 1
            : -1;
        return (
          <Card
            index={activeIndex}
            onClick={onClick}
            key={item.id}
            item={item}
            pos="top"
          />
        );
      })}
    </div>
  );
};

export default TopCards;
