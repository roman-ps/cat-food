'use strict';

const CONTENT = document.querySelector(".content");

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

function clickHandle(evt) {
  let child = evt.target;
  let parent = evt.currentTarget;
  let thisParent = child.closest(".catalog__item");
  let outText = thisParent.querySelector(".catalog__item-weight");
  if (child != parent) {
    if (thisParent.classList.contains("catalog__item--select")) {
      thisParent.classList.toggle("catalog__item--select");
      thisParent.classList.add("catalog__item--disabled");
      outText.innerHTML = DISABLED[outText.dataset.animal];
      outText.style.color = '#ffff66';
    } else
    if (thisParent.classList.contains("catalog__item--disabled")) {
      thisParent.classList.toggle("catalog__item--disabled");
      outText.innerHTML = DEFAULT[outText.dataset.animal];
      outText.style.color = '#ffffff';
    } else {
      thisParent.classList.toggle("catalog__item--select")
      outText.innerHTML = SELECTED[outText.dataset.animal];
      outText.style.color = '#ffffff';
    }
  }
}

CONTENT.addEventListener("click", clickHandle);
