import React from 'react';
import clsx from 'clsx';
import { TCard } from '../common/types';

interface ICardProps {
    item: TCard;
    onClick: (id: number) => void;
    pos: 'top' | 'bottom'; // Изменен тип pos для большей строгости
    index?: number;
}

const Card: React.FC<ICardProps> = ({
    item,
    onClick,
    pos,
    index,
}: ICardProps): JSX.Element => {
    // Используем clsx для объединения классов
    const cardClass = clsx(
        'field__card',
        pos === 'top' ? 'field__card-top' : 'field__card-bottom',
        item.active && 'field__card--active'
    );

    return (
        <div onClick={() => onClick(item.id)} className={cardClass}>
            <img className="field__card-img" src={item.imgUrl} alt={item.title} />
            {index !== undefined && <div className="field__card-index">{index}</div>}
        </div>
    );
};

export default Card;
