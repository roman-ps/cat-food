import {savingData} from './store.js';
import {loadData} from './api.js';
import {fillCard} from './card.js';
import {events} from './events.js';

const CATALOG = document.querySelector(".content__catalog");

const renderCard = (data) => {
  for (let i = 0; i < data.length; i++) {
    CATALOG.appendChild(fillCard(data[i]));
  }
};

const handleDataLoadSuccess = (data) => {
  savingData(data);
  renderCard(data);
  events();
};

const handlePageLoaded = () => {
  loadData()
  .then(handleDataLoadSuccess)
};

handlePageLoaded();
