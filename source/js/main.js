import {storeData} from './store.js';
import {loadData} from './api.js';
import {events} from './events.js';
import {renderCard} from './render.js';

const CATALOG = document.querySelector(".content__catalog");

const handleDataLoadSuccess = (data) => {
  renderCard(CATALOG, storeData(data));
  events();
};

const handlePageLoaded = () => {
  loadData()
  .then(handleDataLoadSuccess)
};

handlePageLoaded();
