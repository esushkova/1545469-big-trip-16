import AbstractView from './abstract-view.js';

const createTripCostTemplate = (totalPrice) => (
  `<p class="trip-info__cost">Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
  </p>`
);

export default class TripCostView extends AbstractView {
  #totalPrice = 0;

  constructor(totalPrice) {
    super();

    this.#totalPrice = totalPrice;
  }

  get template() {
    return createTripCostTemplate(this.#totalPrice);
  }
}
