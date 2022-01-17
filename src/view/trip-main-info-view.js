import AbstractView from './abstract-view.js';

const createTripMainInfoTemplate = () => (
  `<div class="trip-info__main">
  </div>`
);

export default class TripMainInfoView extends AbstractView {

  get template() {
    return createTripMainInfoTemplate();
  }
}
