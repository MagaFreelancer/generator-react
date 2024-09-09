import React from 'react';
import { useAppDispatch } from '../../utils/hook';
import { removeActiveCard } from '../../redux/slices/creatorSlice';
import './index.scss';
import { Card, IActivedCardsProps } from '../../common/types';

const ActivedCards: React.FC<IActivedCardsProps> = (props): JSX.Element => {
  const { activeCards } = props;
  const dispatch = useAppDispatch();

  const onClickRemoveSelectedCard = (e: React.MouseEvent<HTMLDivElement>): void => {
    const target = e.currentTarget.closest('.field__card') as HTMLDivElement;
    
    const id = Number(target.getAttribute('data-bottom'));
    dispatch(removeActiveCard(id));
  };
  return (
    <div className="field__cards-bottom">
      {activeCards.map((item: Card, index: number) => (
        <div
          onClick={onClickRemoveSelectedCard}
          key={index}
          className={`field__card field__card-bottom ${item.active && 'field__card--active'}`}
          data-bottom={`${item.id}`}
        >
          <img className="field__card-img" src={item.imgUrl} alt={item.title} />
          <div className="field__card-index"></div>
        </div>
      ))}
    </div>
  );
};

export default ActivedCards;
