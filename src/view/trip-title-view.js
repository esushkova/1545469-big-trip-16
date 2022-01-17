import AbstractView from './abstract-view.js';
import {
  getFirstItem,
  getLastItem,
} from '../utils/common.js';

const MAX_CITIES_IN_TITLE = 3;

const createTripTitleTemplate = (uniqueNames) => (
  `<h1 class="trip-info__title">
      ${uniqueNames.length > MAX_CITIES_IN_TITLE
         ? `${getFirstItem(uniqueNames)} — ... — ${getLastItem(uniqueNames)}`
        : `${getFirstItem(uniqueNames)} — ${getLastItem(uniqueNames)}`
      }
  </h1>`
);

export default class TripTitleView extends AbstractView {
  #uniqueNames = [];

  constructor(uniqueNames) {
    super();

    this.#uniqueNames = uniqueNames;
  }

  get template() {
    return createTripTitleTemplate(this.#uniqueNames);
  }
}
