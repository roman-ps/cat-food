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
const TextColor = {
  1: '#ffffff',
  2: '#d91667',
  3: '#ffff00',
};

const State = {
  // MAX_COUNT: Object.keys(StateNumber).length, не выебываться?
  START_COUNT: 1,
  MAX_COUNT: 3,
};

export {StateNumber, TextColor, State}
