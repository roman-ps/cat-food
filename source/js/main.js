import {saveData, savingData} from './store.js';
import {loadData} from './api.js';
import {fillCard} from './card.js';

const CATALOG = document.querySelector(".content__catalog");

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

const TEXT_ITEM_DEFAULT = 'Сказочное заморское яство';
const TEXT_ITEM_HOVER = 'Котэ не одобряет';

// const StateNumber = {
//   DEFAULT: 0,
//   SELECT: 1,
//   DISABLED: 2,
// };

const STATE_MAX_COUNT = 3;

// соотношение состояний с классами на элементе
const StateNumber = {
  1: 'catalog__item',
  2: 'catalog__item catalog__item--select',
  3: 'catalog__item catalog__item--disabled',
};

const CardState = {
  [StateNumber.DEFAULT]: 'catalog__item',
  [StateNumber.SELECT]: 'catalog__item catalog__item--select',
  [StateNumber.DISABLED]: 'catalog__item catalog__item--disabled',
};

let state = 1;

// function cardClickHandler(evt) {
//   let child = evt.target;
//   let parent = evt.currentTarget;
//   let thisParent = child.closest(".catalog__item");
//   let attrParent = thisParent.dataset.animal;
//   let outText = thisParent.querySelector(".catalog__descript");
//   if (child != parent && !child.classList.contains("catalog__descript")) {
//     if (thisParent.classList.contains("catalog__item--select")) {
//       thisParent.classList.toggle("catalog__item--select");
//       thisParent.classList.add("catalog__item--disabled");
//       outText.innerHTML = content[attrParent]["disabled"];
//     } else
//     if (thisParent.classList.contains("catalog__item--disabled")) {
//       thisParent.classList.toggle("catalog__item--disabled");
//       outText.innerHTML = content[attrParent]["default"];
//     } else {
//       thisParent.classList.toggle("catalog__item--select");
//       outText.innerHTML = content[attrParent]["selected"];
//     }
//   }
// };

const cardClickHandler = (evt) => {
  const item = evt.target.closest('.catalog__item');
 
  state++;
  if (state > STATE_MAX_COUNT) {
    state = 1;
  };
  item.className = StateNumber[state]; // className использовать - это норм?
};

const cardMouseOutHandler = (evt) => {
  console.log(evt.target)
  if (state === 1) {

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
