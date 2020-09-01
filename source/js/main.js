'use strict';

const CONTENT = document.querySelector(".content");
const COLOR_DEFAULT = '#ffffff';
const COLOR_DISABLED = '#ffff66';
const COLOR_SELECT_HOVER = '#e62e7a';
const COLOR_ITEM_HOVER = '#000000';
const TEXT_ITEM_DEFAULT = 'Сказочное заморское яство';
const TEXT_ITEM_HOVER = 'Котэ не одобряет';
let outputTexts = document.querySelectorAll(".catalog__descript");

const SELECTED = {
  fuagra: 'Печень утки разварная с артишоками',
  fish: 'Головы щучьи с чесноком да свежайшая сёмгушка',
  chicken: 'Филе из цыплят с трюфелями в бульоне',
}

const DEFAULT = {
  fuagra: `Чего сидишь? Порадуй котэ, <span class="catalog__item-buy">купи.</span>`,
  fish: `Чего сидишь? Порадуй котэ, <span class="catalog__item-buy">купи.</span>`,
  chicken: `Чего сидишь? Порадуй котэ, <span class="catalog__item-buy">купи.</span>`,
}

const DISABLED = {
  fuagra: 'Печалька, с фуа-гра закончился.',
  fish: 'Печалька, с рыбой закончился.',
  chicken: 'Печалька, с курой закончился.',
}

for (let key of outputTexts) {
  key.innerHTML = DEFAULT[key.dataset.animal];
}

function clickHandle(evt) {
  let child = evt.target;
  let parent = evt.currentTarget;
  let thisParent = child.closest(".catalog__item");
  let outText = thisParent.querySelector(".catalog__descript");
  if (child != parent && !child.classList.contains("catalog__descript")) {
    if (thisParent.classList.contains("catalog__item--select")) {
      thisParent.classList.toggle("catalog__item--select");
      thisParent.classList.add("catalog__item--disabled");
      outText.innerHTML = DISABLED[outText.dataset.animal];
      outText.style.color = COLOR_DISABLED;
    } else
    if (thisParent.classList.contains("catalog__item--disabled")) {
      thisParent.classList.toggle("catalog__item--disabled");
      outText.innerHTML = DEFAULT[outText.dataset.animal];
      outText.style.color = COLOR_DEFAULT;
    } else {
      thisParent.classList.toggle("catalog__item--select");
      outText.innerHTML = SELECTED[outText.dataset.animal];
      outText.style.color = COLOR_DEFAULT;
    }
  }
}

function mouseOutItem(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("catalog__item--select")) {
    let text = evt.target.querySelector(".catalog__item-text");
    text.innerHTML = TEXT_ITEM_HOVER;
    text.style.color = COLOR_SELECT_HOVER;
  }
}

function mouseOverItem(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("catalog__item--select")) {
    let text = evt.target.querySelector(".catalog__item-text");
    text.innerHTML = TEXT_ITEM_DEFAULT;
    text.style.color = COLOR_ITEM_HOVER;
  }
}

CONTENT.addEventListener("click", clickHandle);
CONTENT.addEventListener("mouseout", mouseOutItem);
CONTENT.addEventListener("mouseover", mouseOverItem);
