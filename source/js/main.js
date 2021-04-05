import {saveData, savingData} from './store.js';
import {loadData} from './api.js';
import {fillCard} from './card.js';

const CATALOG = document.querySelector(".content__catalog");
const TEXT_ITEM_DEFAULT = 'Сказочное заморское яство';
const TEXT_ITEM_HOVER = 'Котэ не одобряет';
const StateNumber = {
  1: 'catalog__item',
  2: 'catalog__item catalog__item--select',
  3: 'catalog__item catalog__item--disabled',
};

const State = {
  MAX_COUNT: Object.keys(StateNumber).length,
  START_COUNT: 1,
};

const renderCard = () => {
  for (let i = 0; i < saveData.length; i++) {
    CATALOG.appendChild(fillCard(saveData[i]));
  }
};

const handleDataLoadSuccess = (data) => {
  savingData(data);
  renderCard();
};

const handlePageLoadedSuccess = () => {
  loadData()
  .then(handleDataLoadSuccess)
};

const cardClickHandler = (evt) => {
  const item = evt.target.closest('.catalog__item');
  
  item.dataset.state++;
  if (item.dataset.state > State.MAX_COUNT) {
    item.dataset.state = State.START_COUNT;
  };
  item.className = StateNumber[item.dataset.state];
};

const cardMouseOutHandler = (evt) => {
  console.log(evt.currentTarget)
  if (evt.currentTarget.classList.contains('content__catalog')) {

  }

}

function mouseOutItem(evt) {
  if (evt.target.closest("catalog__item--select") || evt.target.classList.contains("catalog__item--select")) {

    let text = evt.target.querySelector(".catalog__item-text");
    text.innerHTML = TEXT_ITEM_HOVER;
    text.classList.toggle("catalog__item-text--red");
  }
};

function mouseOverItem(evt) {
  if (evt.target.classList.contains("catalog__item--select") || evt.target.closest("catalog__item--select") && evt.relatedTarget.contains("content__catalog")) {

    let text = evt.target.querySelector(".catalog__item-text");
    text.innerHTML = TEXT_ITEM_DEFAULT;
    text.classList.toggle("catalog__item-text--red");
  }
};

CATALOG.addEventListener("click", cardClickHandler);
CATALOG.addEventListener("mouseout", cardMouseOutHandler);
CATALOG.addEventListener("mouseover", mouseOverItem);
document.addEventListener("DOMContentLoaded", handlePageLoadedSuccess);
