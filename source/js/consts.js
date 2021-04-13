/**
 * Соответствие классов к разным состояниям карточек
 */
const StateNumber = {
  1: 'catalog__item',
  2: 'catalog__item catalog__item--select',
  3: 'catalog__item catalog__item--disabled',
};

/**
 * Cоответсвие цвета к карточкам StateNumber
 */
const Colors = {
  "WHITE": '#ffffff',
  "PINK": '#d91667',
  "YELLOW": '#ffff00',
};

const CardColorsState = {
  DEFAULT: Colors.WHITE,
  SELECTED: Colors.PINK,
  DISABLED: Colors.YELLOW,
}

const State = {
  // MAX_COUNT: Object.keys(StateNumber).length, не выебываться?
  START_COUNT: 1,
  MAX_COUNT: 3,
};

export {StateNumber, CardColorsState, State}
