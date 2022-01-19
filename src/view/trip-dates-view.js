import AbstractView from './abstract-view.js';
import {transformDate} from '../utils/common.js';

const createTripDatesTemplate = ({ dateBegin, dateEnd }) => (
  `<p class="trip-info__dates">${transformDate(dateBegin, 'DD MMM')}&nbsp;&mdash;&nbsp;${transformDate(dateEnd, 'DD MMM')}</p>`
);

export default class TripDatesView extends AbstractView {
  #tripDates = null;

  constructor(tripDates) {
    super();
    this.#tripDates = tripDates;
  }

  get template() {
    return createTripDatesTemplate(this.#tripDates);
  }
}
