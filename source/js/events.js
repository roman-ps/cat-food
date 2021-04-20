import {State, StateNumber, ListCardColors} from './consts.js';

const CATALOG = document.querySelector(".content__catalog");

const cardClickHandler = (evt) => {
  const item = evt.target.closest('.catalog__item');
  const description = item.querySelector('.catalog__description-text');

  item.dataset.state++;

  if (item.dataset.state > State.MAX_COUNT) {
    item.dataset.state = State.START_COUNT;
    description.style.color = ListCardColors[item.dataset.state];
  };
  description.style.color = ListCardColors[item.dataset.state];
  item.className = StateNumber[item.dataset.state];
};

const events = () => {
  CATALOG.addEventListener("click", cardClickHandler);
};

export {events}