import {getNodes} from './utils.js';

const CARD_TEMPLATE = document.querySelector('#tmpl');

const CardSelectors = {
  TEXT: '.catalog__item-text',
  TITLE: '.catalog__item-title',
  TYPE: '.catalog__item-type',
  FEATURES: '.catalog__features',
  QUANTITY: '.catalog__weight-quantity',
  UNIT: '.catalog__weight-unit',
  DESCRIPTIONS: '.catalog__description',
};

/**
 * Заполняем особенности каждый карточки
 *
 * @param {*} features - узел в который добавляем особенности
 * @param {*} data - сохраненные с бэка данные
 */
const fillFeatures = (features, data) => {
  const feature = features.querySelector('.catalog__feature');
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < data.length; i++) {
    const clone = feature.cloneNode();
    clone.textContent = data[i];
    fragment.appendChild(clone);
  }

  features.removeChild(feature);
  features.appendChild(fragment);
};

const addDescription = (descriptions, data) => {
  const item = descriptions.querySelector('.catalog__description-text');

  const clone = item.cloneNode();
  item.textContent = data.default;
};

const fillCard = (data) => {
  const card = CARD_TEMPLATE.content.cloneNode(true);
  const cardNode = getNodes(card, CardSelectors);
  const {TEXT, TITLE, TYPE, FEATURES, QUANTITY, UNIT, DESCRIPTIONS} = cardNode;

  TEXT.textContent = data.text;
  TITLE.textContent = data.title;
  TYPE.textContent = data.type;
  fillFeatures(FEATURES, data.features);
  QUANTITY.textContent = data.quantity;
  UNIT.textContent = data.unit;
  addDescription(DESCRIPTIONS, data.description)

  return card;
};

export {fillCard}
