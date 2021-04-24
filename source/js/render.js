import {fillCard} from './card.js';

const renderCard = (node, data) => {
  for (let i = 0; i < data.length; i++) {
    node.appendChild(fillCard(data[i]));
  }
};

export {renderCard}
