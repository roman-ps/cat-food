/**
 * Соответствие классов к разным состояниям карточки
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
 * Cоответствие цвета к состоянию карточки товара
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

/**
 * Для изменения цветов по кругу при клике по карточке
 * Используется в ф-ии cardClickHandler
 */
const ListCardColors = [
  CardColorsState.DEFAULT,
  CardColorsState.SELECTED,
  CardColorsState.DISABLED,
];

const State = {
  MAX_COUNT: StateNumber.length - 1,
  START_COUNT: 0,
};

export {StateNumber, ListCardColors, CardClassState, State}
