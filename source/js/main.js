'use strict';

const CONTENT = document.querySelector(".content");
const colorDefault = '#ffffff';
const colorDisabled = '#ffff66';
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
      outText.style.color = colorDisabled;
    } else
    if (thisParent.classList.contains("catalog__item--disabled")) {
      thisParent.classList.toggle("catalog__item--disabled");
      outText.innerHTML = DEFAULT[outText.dataset.animal];
      outText.style.color = colorDefault;
    } else {
      thisParent.classList.toggle("catalog__item--select");
      outText.innerHTML = SELECTED[outText.dataset.animal];
      outText.style.color = colorDefault;
    }
  }
}

function toggleTitle() {

}

CONTENT.addEventListener("click", clickHandle);
CONTENT.addEventListener("mouseout", toggleTitle);
