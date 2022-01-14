import TripTitleView from '../view/trip-title-view.js';
import TripDatesView from '../view/trip-dates-view.js';
import TripMainInfoView from '../view/trip-main-info-view.js';

import { render, RenderPosition } from '../utils/render.js';


export default class TripPresenter {

  #tripMainInfoComponent = new TripMainInfoView();
  #tripTitleComponent = new TripTitleView(this.#points);
  #tripDatesComponent = new TripDatesView(this.#points);

  #points = [];

  constructor(infoContainer) {
    this.#infoContainer = infoContainer;
  }

  init = () => {
    this.#renderInfo();

    render(this.#infoContainer, this.#tripMainInfoComponent, RenderPosition.AFTER_BEGIN);

  }

  #renderTitle = () => {
    render(this.#tripMainInfoComponent, this.#tripTitleComponent, RenderPosition.BEFORE_END);
  }

  #renderDates = () => {
    render(this.#tripTitleComponent, this.#tripDatesComponent, RenderPosition.BEFORE_END);
  }

  #renderInfo = () => {
this.#renderTitle();
this.#renderDates();
  }
}
