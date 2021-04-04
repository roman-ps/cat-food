import {getNodes} from './utils.js';

const CARD_TEMPLATE = document.querySelector('#tmpl');

const CardSelectors = {
  TEXT: '.catalog__item-text',
  TITLE: '.catalog__item-title',
  TYPE: '.catalog__item-type',
  LIST: '.catalog__list',
  QUANTITY: '.catalog__weight-quantity',
  UNIT: '.catalog__weight-unit',
  DESCRIPTION: '.catalog__descript',
  BUY: '.catalog__item-buy', 
}


const fillCard = (data) => {
  const card = CARD_TEMPLATE.content.cloneNode(true);
  const cardNode = getNodes(card, CardSelectors);
  const {TEXT, TITLE, TYPE, LIST, QUANTITY, UNIT, DESCRIPTION, BUY} = cardNode;

  TEXT.textContent = data.text;
  TITLE.textContent = data.title;
  TYPE.textContent = data.type;
  LIST.textContent = data.features;
  QUANTITY.textContent = data.quantity;
  UNIT.textContent = data.unit;
  DESCRIPTION.textContent = data.description[0];
  BUY.textContent = data.buy;

  return card;
}

export {fillCard}
