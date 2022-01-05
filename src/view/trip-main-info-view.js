import AbstractView from './abstract-view.js';

const createTripMainInfoTemplate = () => (
  `<section class="trip-main__trip-info  trip-info">
  </section>`
);

export default class TripMainInfoView extends AbstractView {

  get template() {
    return createTripMainInfoTemplate();
  }
}
