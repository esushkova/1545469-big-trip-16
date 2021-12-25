import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
import { render, RenderPosition, replace } from '../utils/render.js';
import { isEscapeEvent } from '../utils/common.js';

export default class PointPresenter {
  #pointListContainer = null;

  #pointComponent = null;
  #editPointComponent = null;

  #point = null;
  #destinations = [];
  #offers = [];

  constructor(pointListContainer) {
    this.#pointListContainer = pointListContainer;
  }

  init = (point, destinations, offers) => {
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    this.#pointComponent = new PointView(point);
    this.#editPointComponent = new EditPointView(point, destinations, offers);

    this.#pointComponent.setRollupButtonClickHandler(this.#handleEditClick);
    this.#editPointComponent.setSaveHandler(this.#handleFormSubmit);


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
      //document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFormSubmit = () => {
    this.#replaceFormToPoint();
  }
}

export {PointPresenter};
