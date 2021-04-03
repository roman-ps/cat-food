import {saveData, savingData} from './store.js';
import {loadData} from './api.js';
import {fillCard} from './card.js';

const CATALOG = document.querySelector(".content__catalog");

const handleDataSuccess = (data) => {
  savingData(data);
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    CATALOG.appendChild(fillCard(saveData[i]))
  }
}


const handlePageLoaded = () => {
  loadData()
  .then(handleDataSuccess)
};


document.addEventListener("DOMContentLoaded", handlePageLoaded);

const COLOR_SELECT_HOVER = '#e62e7a';
const COLOR_ITEM_HOVER = '#000000';
const TEXT_ITEM_DEFAULT = 'Сказочное заморское яство';
const TEXT_ITEM_HOVER = 'Котэ не одобряет';

function clickHandle(evt) {
  let child = evt.target;
  let parent = evt.currentTarget;
  let thisParent = child.closest(".catalog__item");
  let attrParent = thisParent.dataset.animal;
  let outText = thisParent.querySelector(".catalog__descript");
  if (child != parent && !child.classList.contains("catalog__descript")) {
    if (thisParent.classList.contains("catalog__item--select")) {
      thisParent.classList.toggle("catalog__item--select");
      thisParent.classList.add("catalog__item--disabled");
      outText.innerHTML = content[attrParent]["disabled"];
    } else
    if (thisParent.classList.contains("catalog__item--disabled")) {
      thisParent.classList.toggle("catalog__item--disabled");
      outText.innerHTML = content[attrParent]["default"];
    } else {
      thisParent.classList.toggle("catalog__item--select");
      outText.innerHTML = content[attrParent]["selected"];
    }
  }
}

function mouseOutItem(evt) {
  if (evt.target.closest("catalog__item--select") || evt.target.classList.contains("catalog__item--select")) {

    let text = evt.target.querySelector(".catalog__item-text");
    text.innerHTML = TEXT_ITEM_HOVER;
    text.classList.toggle("catalog__item-text--red");
  }
}

function mouseOverItem(evt) {
  if (evt.target.classList.contains("catalog__item--select") || evt.target.closest("catalog__item--select") && evt.relatedTarget.contains("content__catalog")) {

    let text = evt.target.querySelector(".catalog__item-text");
    text.innerHTML = TEXT_ITEM_DEFAULT;
    text.classList.toggle("catalog__item-text--red");
  }
}

CATALOG.addEventListener("click", clickHandle);
CATALOG.addEventListener("mouseout", mouseOutItem);
CATALOG.addEventListener("mouseover", mouseOverItem);
