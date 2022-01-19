import AbstractView from './abstract-view.js';
import {transformDate} from '../utils/common.js';
import {getFirstItem} from '../utils/common.js';
import {getLastItem} from '../utils/common.js';

const MAX_CITIES_IN_TITLE = 3;

const createTripTitleDatesTemplate = (points) => {
  const uniqueNames = new Set();

  points.forEach(({destination}) => {
    uniqueNames.add(destination.name);
  });

  const dateBegin = getFirstItem(points).startDate;
  const dateEnd = getLastItem(points).finishDate;

  return `<div class="trip-info__main">
    <h1 class="trip-info__title">${uniqueNames.size > MAX_CITIES_IN_TITLE ? `${getFirstItem([...uniqueNames])} — ... — ${getLastItem([...uniqueNames])}` : `${getFirstItem([...uniqueNames])} — ${getLastItem([...uniqueNames])}`}
    </h1>
    <p class="trip-info__dates">${transformDate(dateBegin, 'DD MMM')}&nbsp;&mdash;&nbsp;${transformDate(dateEnd, 'DD MMM')}</p>
   </div>`;
};

export default class TripTitleDatesView extends AbstractView {
  #points = [];

  constructor(points) {
    super();
    this.#points = points;
  }

  get template() {
    return createTripTitleDatesTemplate(this.#points);
  }
}
