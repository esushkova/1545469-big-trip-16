import AbstractView from './abstract-view.js';
import {transformDate} from '../utils/common.js';

const createTripTitleDatesTemplate = (points) => {
  const cities = [];
  cities[0] = points[0].destination.name;

  for (let i = 1; i <= points.length - 1; i++) {

    if (points[i].destination.name !== cities[cities.length - 1]) {
      cities.push(points[i].destination.name);
    }
  }

  const dateBegin = points[0].startDate;
  const dateEnd = points[points.length - 1].finishDate;

  return `<div class="trip-info__main">
    <h1 class="trip-info__title">${cities.length > 3 ? `${cities[0]} — ... — ${cities[cities.length - 1]}` : `${cities[0]} — ${cities[cities.length - 1]}`}
    </h1>
    <p class="trip-info__dates">${transformDate(dateBegin, 'DD MMM')}&nbsp;&mdash;&nbsp;${transformDate(dateEnd, 'DD MMM')}</p>
   </div>`
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
