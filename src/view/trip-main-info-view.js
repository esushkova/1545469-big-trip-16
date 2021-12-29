import AbstractView from './abstract-view.js';

const createTripMainInfoTemplate = () => (
  `<section class="trip-main__trip-info  trip-info">
  </section>`
);

/*
const createTripMainInfoTemplate = (points) => {
  let totalPrice = 0;

  for (const point of points) {
    totalPrice += point['basePrice'];
 }

  return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

              <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
            </div>

            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
            </p>
          </section>`
};
*/

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

//разделить на три компонента: обертка, div и параграф

/*
const createTripMainInfoTemplate = () => (
  `<section class="trip-main__trip-info  trip-info">
  ${createTripTitleDatesTemplate()}
  ${createTripCostTemplate()}
  </section>`
);

const createTripTitleDatesTemplate = () => (
  `<div class="trip-info__main">
    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>
    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
   </div>`
);

const createTripCostTemplate = () => (
  `<p class="trip-info__cost">Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
   </p>`
);
*/
