import { useAppDispatch, useAppSelector } from '../utils/hook';
import { changeCards } from '../redux/slices/creatorSlice';
import Button from './Button';
import {
  activeCardsSelector,
  btnsSelector,
  typeSelector,
} from '../redux/slices/selectors';
import { TBtn, TCard } from '../common/types';

const Controller: React.FC = (): JSX.Element => {
  const btns: TBtn[] = useAppSelector(btnsSelector);
  const activeCards: TCard[] = useAppSelector(activeCardsSelector);
  const type: string = useAppSelector(typeSelector);
  const dispatch = useAppDispatch();
  const disabled: boolean = activeCards.length >= 2 ? false : true;

  const onClickSetupState = (obj: TBtn): void => {
    const { type, count } = obj;

    dispatch(changeCards({ type, count }));
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
              <li key={`btn-${index}`} className="controller__list-item">
                <Button
                  text={item.text}
                  onClick={() => onClickSetupState(item)}
                  className={`controller__list-btn ${activeCls}`}
                />
              </li>
            );
          })}
        </ul>
        <Button
          text="Сгенерировать"
          className="controller__generate"
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Controller;
