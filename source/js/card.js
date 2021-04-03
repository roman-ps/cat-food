import {getNodes} from './utils.js';

const CARD_TEMPLATE = document.querySelector('#tmpl');

const CardSelectors = {
  text: '.catalog__item-text',
  title: '.catalog__item-title',
  type: '.catalog__item-type',
  list: '.catalog__list',
  quantity: '.catalog__weight-quantity',
  unit: '.catalog__weight-unit',
  description: '.catalog__descript',
  buy: '.catalog__item-buy',
}


const fillCard = (data) => {
  const card = CARD_TEMPLATE.content.cloneNode(true);
  const cardNode = getNodes(card, CardSelectors);
  const {title, type, list, quantity, unit, description, buy, text} = cardNode;

  text.textContent = data.text;
  title.textContent = data.title;
  type.textContent = data.type;
  list.textContent = data.features;
  console.log(data)
  quantity.textContent = data.quantity;
  unit.textContent = data.unit;
  description.textContent = data.description[0];
  buy.textContent = data.buy;

  return card;
}

export {fillCard}
