/**
 * Соответствие классов к разным состояниям карточек
 */
const CardClassState = {
  DEFAULT: 'catalog__item',
  SELECTED: 'catalog__item catalog__item--select',
  DISABLED: 'catalog__item catalog__item--disabled',
};

const StateNumber = {
  1: CardClassState.DEFAULT,
  2: CardClassState.SELECTED,
  3: CardClassState.DISABLED,
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
}

const State = {
  MAX_COUNT: Object.keys(Colors).length,
  START_COUNT: 1,
};

export {StateNumber, CardColorsState, CardClassState, State}
