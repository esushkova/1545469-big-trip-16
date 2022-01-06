import AbstractView from './abstract-view.js';

const createTripCostTemplate = (points) => {
  let totalBasePrice = 0;
  let totalOffersPrice = 0;
  let totalPrice = 0;

  for (const point of points) {
    totalBasePrice += point.basePrice;

    const allOffers = point.offers;

    for(const offer of allOffers) {
      totalOffersPrice += offer.price;
    }
  }

  totalPrice = totalBasePrice + totalOffersPrice;

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
