import {getNodes} from './utils.js';

const CARD_TEMPLATE = document.querySelector('#tmpl');

const CardSelectors = {
  text: '.catalog__item-text',
  title: '.catalog__item-title',
  subtitle: '.catalog__item-subtitle',
  list: '.catalog__list',
  quantity: '.catalog__weight-quantity',
  unit: '.catalog__weight-unit',
  description: '.catalog__descript',
  buy: '.catalog__item-buy',
}


const fillCard = (data) => {
  const card = CARD_TEMPLATE.content.cloneNode(true);
  const cardNode = getNodes(card, CardSelectors)

}

fillCard()

export {}
