import {savingData} from './store.js';
import {loadData} from './api.js';
import {fillCard} from './card.js';
import {StateNumber, CardColorsState, State} from './consts.js';

const CATALOG = document.querySelector(".content__catalog");

const renderCard = (data) => {
  for (let i = 0; i < data.length; i++) {
    CATALOG.appendChild(fillCard(data[i]));
  }
};

const handleDataLoadSuccess = (data) => {
  savingData(data);
  renderCard(data);
};

const handlePageLoadedSuccess = () => {
  loadData()
  .then(handleDataLoadSuccess)
};

const cardClickHandler = (evt) => {
  const item = evt.target.closest('.catalog__item');
  const description = item.querySelector('.catalog__description-text');
  console.log(CardColorsState);
  item.dataset.state++;
  console.log(CardColorsState[item.dataset.state])
  if (item.dataset.state > State.MAX_COUNT) {
    item.dataset.state = State.START_COUNT;
    description.style.color = CardColorsState[item.dataset.state];
  };
  description.style.color = CardColorsState[item.dataset.state];
  item.className = StateNumber[item.dataset.state];
};


CATALOG.addEventListener("click", cardClickHandler);
document.addEventListener("DOMContentLoaded", handlePageLoadedSuccess);
