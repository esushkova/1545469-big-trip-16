import AbstractView from './abstract-view.js';
import {transformDate} from '../utils/common.js';
import {getFirstItem} from '../utils/common.js';
import {getLastItem} from '../utils/common.js';

const createTripDatesTemplate = (points) => {

  const dateBegin = getFirstItem(points).startDate;
  const dateEnd = getLastItem(points).finishDate;

 return `<p class="trip-info__dates">${transformDate(dateBegin, 'DD MMM')}&nbsp;&mdash;&nbsp;${transformDate(dateEnd, 'DD MMM')}</p>`;
};

export default class TripDatesView extends AbstractView {
  #points = [];

  constructor(points) {
    super();
    this.#points = points;
  }

  get template() {
    return createTripDatesTemplate(this.#points);
  }
}
