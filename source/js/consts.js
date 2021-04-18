/**
 * Соответствие классов к разным состояниям карточек
 */
const CardClassState = {
  DEFAULT: 'catalog__item',
  SELECTED: 'catalog__item catalog__item--select',
  DISABLED: 'catalog__item catalog__item--disabled',
};

const StateNumber = {
  0: CardClassState.DEFAULT,
  1: CardClassState.SELECTED,
  2: CardClassState.DISABLED,
};

/**
 * Cоответсвие цвета к карточкам StateNumber
 */
const Colors = {
  WHITE: '#ffffff',
  PINK: '#d91667',
  YELLOW: '#ffff00',
};

const CardColorsState = {
  DEFAULT: Colors.WHITE,
  SELECTED: Colors.PINK,
  DISABLED: Colors.YELLOW,
};

const ListCardColors = [
  CardColorsState.DEFAULT,
  CardColorsState.SELECTED,
  CardColorsState.DISABLED,
];

const State = {
  MAX_COUNT: Object.keys(Colors).length - 1,
  START_COUNT: 0,
};

export {StateNumber, ListCardColors, CardClassState, State}
