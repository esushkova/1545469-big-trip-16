import TripMainInfoView from '../view/trip-main-info-view.js';
import TripTitleView from '../view/trip-title-view.js';
import TripDatesView from '../view/trip-dates-view.js';

import { render, RenderPosition } from '../utils/render.js';
import {
  getFirstItem,
  getLastItem,
} from '../utils/common.js';

const calcTripDates = (points) => {
  const uniqueNames = new Set();

  points.forEach(({destination}) => {
    uniqueNames.add(destination.name);
  });

  return {
    dateBegin: getFirstItem(points).startDate,
    dateEnd: getLastItem(points).finishDate,
  }
}

export default class MainInfoPresenter {
  #container = null;

  #mainInfoComponent = null;

  constructor(container) {
    this.#container = container;
  }

  init = (points) => {
    const uniqueNames = points.map(({ destination }) => destination.name);
    const tripDates = calcTripDates(points);

    const prevMainInfoComponent = this.#mainInfoComponent;

    this.#mainInfoComponent = new TripMainInfoView();

    const tripTitleComponent = new TripTitleView(uniqueNames);
    const tripDatesComponent = new TripDatesView(tripDates);

    render(this.#mainInfoComponent, tripTitleComponent, RenderPosition.AFTER_BEGIN);
    render(this.#mainInfoComponent, tripDatesComponent, RenderPosition.BEFORE_END);

    if (prevMainInfoComponent === null) {
      render(this.#container, this.#mainInfoComponent, RenderPosition.AFTER_BEGIN);
      return;
    }

    replace(this.#mainInfoComponent, prevMainInfoComponent);
    remove(prevMainInfoComponent);
  }
}
