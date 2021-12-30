import AbstractView from './abstract-view.js';

const createTripCostTemplate = (points) => {
  let totalPrice = 0;

  for (const point of points) {
    totalPrice += point['basePrice'];
  }
  return `<p class="trip-info__cost">Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
   </p>`;
};

export default class TripCostView extends AbstractView {
  #points = [];

  constructor(points) {
    super();
    this.#points = points;
  }

  get template() {
    return createTripCostTemplate(this.#points);
  }
}
