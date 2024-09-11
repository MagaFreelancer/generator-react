import React from 'react';
import Card from './Card';
import { TCard } from '../common/types';
interface IBottomCardsProps {
  onClick: (id: number) => void;
  activeCards: TCard[];
}
const TopCards: React.FC<IBottomCardsProps> = ({
  onClick,
  activeCards,
}: IBottomCardsProps) => {
  return (
    <div className="field__cards-bottom">
      {activeCards.map((item) => (
        <Card onClick={onClick} key={item.id} item={item} pos="bottom" />
      ))}
    </div>
  );
};

export default TopCards;
