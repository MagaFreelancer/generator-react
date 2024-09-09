import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICardState } from '../../common/types';

/*
cards - карточки
activeCards - активные карточки
type - тип карточек, которые будут ренедериться
count - количество карточек, которые будут ренедериться
btns - кнопки  


*/
const initialState: ICardState = {
  cards: [
    {
      id: 1,
      imgUrl:
        'https://adsboard-static.spectrumdata.tech/files/blogs_content/fe2a89919d8aa9a/v7f79c8.jpg',
      title: 'Car 1',
      type: 'car',
      active: false,
    },
    {
      id: 2,
      imgUrl:
        'https://motor.ru/thumb/1500x0/filters:quality(75):no_upscale()/imgs/2022/01/27/11/5197968/f7aba1d92862152a77a6fcf637d2ea171e1defe8.jpg',
      title: 'Car 2',
      type: 'car',
      active: false,
    },
    {
      id: 3,
      imgUrl: 'https://rg.ru/uploads/images/169/12/62/35_e43ba14c.jpg',
      title: 'Car 3',
      type: 'car',
      active: false,
    },
    {
      id: 4,
      imgUrl:
        'https://img.gazeta.ru/files3/225/15619225/602fd8501fa16_img-pic_32ratio_1200x800-1200x800-70042.jpg',
      title: 'Car 4',
      type: 'car',
      active: false,
    },
    {
      id: 5,
      imgUrl:
        'https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg',
      title: 'Cat 1',
      type: 'cat',
      active: false,
    },
    {
      id: 6,
      imgUrl:
        'https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg',
      title: 'Cat 2',
      type: 'cat',
      active: false,
    },
    {
      id: 7,
      imgUrl:
        'https://masterpiecer-images.s3.yandex.net/5fd531dca6427c7:upscaled',
      title: 'Cat 3',
      type: 'cat',
      active: false,
    },
    {
      id: 8,
      imgUrl:
        'https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200',
      title: 'Cat 4',
      type: 'cat',
      active: false,
    },
    {
      id: 9,
      imgUrl:
        'https://avatars.dzeninfra.ru/get-zen_doc/8098241/pub_641ec1d0798be415157b4180_641ec210d2d45b2f14e36c73/scale_1200',
      title: 'Cat 5',
      type: 'cat',
      active: false,
    },
  ],
  type: '',
  count: 0,
  activeCards: [],
  btns: [
    {
      type: 'cat', // в зависимости от этого типа будут рендериться карточки
      count: 4, // в зависимости от этого числа будут рендериться карточки
      text: 'Набор 1', // текст для кнопок
    },
    {
      type: 'car',
      count: 5,
      text: 'Набор 2',
    },
  ],
};

export const creatorSlice = createSlice({
  name: 'creator',
  initialState,
  reducers: {
    changeCards: (
      state,
      action: PayloadAction<{ type: string; count: number }>
    ) => {
      state.type = action.payload.type;
      state.count = action.payload.count;

      state.activeCards = [];
      state.cards = state.cards.map((card) => {
        return { ...card, active: false };
      });
    },
    addActiveCard: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const card = state.cards.find((card) => card.id === id);
      const activedCard = state.activeCards.find((card) => card.id === id); // проверят есть ли уже среди активных карточек

      if (card && !activedCard) {
        state.cards = state.cards.map((card) =>
          card.id === id ? { ...card, active: !card.active } : card
        );
        state.activeCards.push(card); // Здесь изменяется состояние
      }
    },
    removeActiveCard: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.activeCards = state.activeCards.filter((card) => card.id !== id);
      state.cards = state.cards.map((card) =>
        card.id === id ? { ...card, active: !card.active } : card
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeCards,
  addActiveCard,
  removeActiveCard
} = creatorSlice.actions;

export default creatorSlice.reducer;
