import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
import { render, RenderPosition, replace, remove } from '../utils/render.js';

export default class PointPresenter {
  #pointListContainer = null;

  #pointComponent = null;
  #editPointComponent = null;

  #point = null;
  #destinations = [];
  #offers = [];

  constructor(pointListContainer) {
    this.#pointListContainer = pointListContainer
  }

  init = (point, destinations, offers) => {
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    this.#pointComponent = new PointView(point);
    this.#editPointComponent = new EditPointView(point, destinations, offers);

    this.#pointComponent.setEditClick(this.#setEditClick);
    this.#editPointComponent.setFormSubmit(this.#setFormSubmit);
    this.#editPointComponent.setEditClicButton(this.#setEditClicButton);

    render(this.#pointListContainer, this.#pointComponent, RenderPosition.BEFORE_END);
  }

  #replacePointToForm = () => {
    replace(this.#editPointComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#onEscKeyDown);
  };

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#onEscKeyDown);
  };

  #onEscKeyDown = (evt) => {
    if (isEscapeEvent(evt)) {
      evt.preventDefault();
      this.#replaceFormToPoint();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };

  #setEditClick = () => {
    this.#replacePointToForm();
  }

  #setFormSubmit = () => {
    this.#replaceFormToPoint();
  }

  #setEditClicButton = () => {
    this.#replaceFormToPoint();
  }

}

export {PointPresenter}
