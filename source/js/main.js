'use strict';

const CONTENT = document.querySelector(".content");

const SELECTED = {
  fuagra: 'Печень утки разварная с артишоками',
  fish: 'Головы щучьи с чесноком да свежайшая сёмгушка',
  checken: 'Филе из цыплят с трюфелями в бульоне',
}

const DISABLED = {
  fuagra: 'Печалька, с фуа-гра закончился.',
  fish: 'Печалька, с рыбой закончился.',
  checken: 'Печалька, с курой закончился.',
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
    } else
    if (thisParent.classList.contains("catalog__item--disabled")) {
      thisParent.classList.toggle("catalog__item--disabled");
      outText.innerHTML = 'Чего сидишь? Порадуй котэ, купи';
    } else {
      thisParent.classList.toggle("catalog__item--select")
      outText.innerHTML = SELECTED[outText.dataset.animal];
    }
  }
}

CONTENT.addEventListener("click", clickHandle);
