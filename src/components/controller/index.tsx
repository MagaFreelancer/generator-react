import React from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { RootState } from '../../redux/store';
import { changeCards } from '../../redux/slices/creatorSlice';

const Controller: React.FC = (): JSX.Element => {
  const { btns, activeCards, type } = useAppSelector(
    (state: RootState) => state.creator
  );
  const dispatch = useAppDispatch();
  const disabled: boolean = activeCards.length >= 2 ? false : true;

  const onClickSetupState = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const type = target.getAttribute('data-type');
    const count = Number(target.getAttribute('data-count'));

    if (type && count) dispatch(changeCards({ type, count }));
  };

  return (
    <div className="controller">
      <h1 className="controller__title">Creator AI</h1>
      <div className="controller__content">
        <ul className="controller__list">
          {btns.map((item, index) => {
            const activeCls =
              type === item.type && 'controller__list-btn--active';

            return (
              <li key={index} className="controller__list-item">
                <button
                  onClick={onClickSetupState}
                  className={`controller__list-btn ${activeCls}`}
                  data-type={item.type}
                  data-count={item.count}
                >
                  {item.text}
                </button>
              </li>
            );
          })}
        </ul>

        <button className="controller__generate" disabled={disabled}>
          Сгенерировать
        </button>
      </div>
    </div>
  );
};

export default Controller;
