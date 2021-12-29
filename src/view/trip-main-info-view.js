import AbstractView from './abstract-view.js';

const createTripMainInfoTemplate = () => (
  `<section class="trip-main__trip-info  trip-info">
  </section>`
);

export default class TripMainInfoView extends AbstractView {
  #points = [];

  constructor(points) {
    super();
    this.#points = points;
  }

  get template() {
    return createTripMainInfoTemplate(this.#points);
  }
}
