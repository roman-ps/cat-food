import {saveData, savingData} from './store.js';
import {loadData} from './api.js';
import {fillCard} from './card.js';

const CATALOG = document.querySelector(".content__catalog");

/**
 * Классы к разным состояниям карточкек
 */
const StateNumber = {
  1: 'catalog__item',
  2: 'catalog__item catalog__item--select',
  3: 'catalog__item catalog__item--disabled',
};

/**
 * соответсвие цвета к состоянию карточки StateNumber
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

const renderCard = (data) => {
  for (let i = 0; i < data.length; i++) {
    CATALOG.appendChild(fillCard(data[i]));
  }
};

const handleDataLoadSuccess = (data) => {
  savingData(data);
  renderCard(saveData);
};

const handlePageLoadedSuccess = () => {
  loadData()
  .then(handleDataLoadSuccess)
};

const cardClickHandler = (evt) => {
  const item = evt.target.closest('.catalog__item');
  const description = item.querySelector('.catalog__description-text');

  item.dataset.state++;
  description.style.color = TextColor[item.dataset.state];
  if (item.dataset.state > State.MAX_COUNT) {
    item.dataset.state = State.START_COUNT;
    description.style.color = TextColor[item.dataset.state];
  };
  item.className = StateNumber[item.dataset.state];
};

// const cardMouseOutHandler = (evt) => {
//   const item = evt.target.closest('.catalog__item--select');

//   if (evt.target.closest("catalog__item--select") && item.dataset.state === '2') {
//     console.log('Ушло с карточки и поменяли цвет надписи')
//   }
// };

// function mouseOutItem(evt) {
//   if (evt.target.closest("catalog__item--select") || evt.target.classList.contains("catalog__item--select")) {

//     let text = evt.target.querySelector(".catalog__item-text");
//     text.innerHTML = TEXT_ITEM_HOVER;
//     text.classList.toggle("catalog__item-text--red");
//   }
// };

// function mouseOverItem(evt) {
//   if (evt.target.classList.contains("catalog__item--select") || evt.target.closest("catalog__item--select") && evt.relatedTarget.contains("content__catalog")) {

//     let text = evt.target.querySelector(".catalog__item-text");
//     text.innerHTML = TEXT_ITEM_DEFAULT;
//     text.classList.toggle("catalog__item-text--red");
//   }
// };

CATALOG.addEventListener("click", cardClickHandler);
// CATALOG.addEventListener("mouseout", cardMouseOutHandler);
// CATALOG.addEventListener("mouseout", cardMouseOutHandler);
// CATALOG.addEventListener("mouseover", mouseOverItem);
document.addEventListener("DOMContentLoaded", handlePageLoadedSuccess);
