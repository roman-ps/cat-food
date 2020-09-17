'use strict';

const CATALOG = document.querySelector(".content__catalog");

class Maincard {
  constructor(text, title, subtitle, list1, list2, list3, quanty, unit, descr, animal) {
    this.text = text,
    this.title = title,
    this.subtitle = subtitle,
    this.list1 = list1,
    this.list2 = list2,
    this.list3 = list3,
    this.quanty = quanty,
    this.unit = unit,
    this.descr = descr,
    this.animal = animal
  }

  render() {
    const NEW_CARD = document.createElement("li");
    NEW_CARD.classList.add("catalog__item");
    CATALOG.appendChild(NEW_CARD);
    NEW_CARD.innerHTML = `
    <div class="overlay"></div>
    <p class="catalog__item-text">${this.text}</p>
    <h2 class="catalog__item-title">${this.title}</h2>
    <h3 class="catalog__item-subtitle">${this.subtitle}</h3>
    <ul class="catalog__list">
      <li class="catalog__list-item">${this.list1}</li>
      <li class="catalog__list-item">${this.list2}</li>
      <li class="catalog__list-item">${this.list3}</li>
    </ul>
    <div class="catalog__weight">
      <div class="catalog__weight-quantity">${this.quanty}</div>
      <div class="catalog__weight-unit">${this.unit}</div>
    </div>
    <p class="catalog__descript" data-animal="${this.animal}">${this.descr}</p>
    `
  }
}

let fuagra = new Maincard(
  "Сказочное заморское яство",
  "Нямушка",
  "с фуа-гра",
  "10 порций",
  "мышь в подарок",
  "",
  "0,5",
  "кг",
  `Чего сидишь? Порадуй котэ, <span class="catalog__item-buy">купи.</span>`,
  "fuagra"
)

let fish = new Maincard(
  "Сказочное заморское яство",
  "Нямушка",
  "с рыбой",
  "40 порций",
  "2 мышей в подарок",
  "",
  "2",
  "кг",
  `Чего сидишь? Порадуй котэ, <span class="catalog__item-buy">купи.</span>`,
  "fish"
)

let chicken = new Maincard(
  "Сказочное заморское яство",
  "Нямушка",
  "с курой",
  "100 порций",
  "5 мышей в подарок",
  "Заказчик доволен",
  "5",
  "кг",
  `Чего сидишь? Порадуй котэ, <span class="catalog__item-buy">купи.</span>`,
  "chicken"
)

fuagra.render()
fish.render()
chicken.render()

const COLOR_SELECT_HOVER = '#e62e7a';
const COLOR_ITEM_HOVER = '#000000';
const TEXT_ITEM_DEFAULT = 'Сказочное заморское яство';
const TEXT_ITEM_HOVER = 'Котэ не одобряет';

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
  let outText = thisParent.querySelector(".catalog__descript");
  if (child != parent && !child.classList.contains("catalog__descript")) {
    if (thisParent.classList.contains("catalog__item--select")) {
      thisParent.classList.toggle("catalog__item--select");
      thisParent.classList.add("catalog__item--disabled");
      outText.innerHTML = DISABLED[outText.dataset.animal];
    } else
    if (thisParent.classList.contains("catalog__item--disabled")) {
      thisParent.classList.toggle("catalog__item--disabled");
      outText.innerHTML = DEFAULT[outText.dataset.animal];
    } else {
      thisParent.classList.toggle("catalog__item--select");
      outText.innerHTML = SELECTED[outText.dataset.animal];
    }
  }
}

function mouseOutItem(evt) {
  if (evt.target.classList.contains("catalog__item--select")) {
    let text = evt.target.querySelector(".catalog__item-text");
    text.innerHTML = TEXT_ITEM_HOVER;
    text.style.color = COLOR_SELECT_HOVER;
  }
}

function mouseOverItem(evt) {
  if (evt.target.classList.contains("catalog__item--select")) {
    let text = evt.target.querySelector(".catalog__item-text");
    text.innerHTML = TEXT_ITEM_DEFAULT;
    text.style.color = COLOR_ITEM_HOVER;
  }
}

CATALOG.addEventListener("click", clickHandle);
CATALOG.addEventListener("mouseout", mouseOutItem);
CATALOG.addEventListener("mouseover", mouseOverItem);
