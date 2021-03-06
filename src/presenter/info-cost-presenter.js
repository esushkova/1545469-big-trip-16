import TripCostView from '../view/trip-cost-view.js';
import { render, RenderPosition, replace, remove } from '../utils/render.js';
import { calcTotalPrice } from '../utils/trip-cost.js';

export default class InfoCostPresenter {
  #container = null;

  #tripCostComponent = null;

  constructor(container) {
    this.#container = container;
  }

  init = (points) => {
    const totalPrice = calcTotalPrice(points);

    const prevTripCostComponent = this.#tripCostComponent;

    this.#tripCostComponent = new TripCostView(totalPrice);

    if (prevTripCostComponent === null) {
      render(this.#container, this.#tripCostComponent, RenderPosition.BEFORE_END);
      return;
    }

    replace(this.#tripCostComponent, prevTripCostComponent);
    remove(prevTripCostComponent);
  }
}
