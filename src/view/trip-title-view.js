import AbstractView from './abstract-view.js';

const createTripTitleTemplate = (points) => {
  const uniqueNames = new Set();

  points.forEach(({destination}) => {
    uniqueNames.add(destination.name);
  });

return `<div class="trip-info__main">
        <h1 class="trip-info__title">${uniqueNames.size > MAX_CITIES_IN_TITLE ? `${getFirstItem([...uniqueNames])} — ... — ${getLastItem([...uniqueNames])}` : `${getFirstItem([...uniqueNames])} — ${getLastItem([...uniqueNames])}`}
        </h1>
        </div>`;
};

  export default class TripTitleView extends AbstractView {
    #points = [];

    constructor(points) {
      super();
      this.#points = points;
    }

    get template() {
      return createTripTitleTemplate(this.#points);
    }
  }
