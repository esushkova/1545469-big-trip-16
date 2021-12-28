import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
import { render, RenderPosition, replace, remove } from '../utils/render.js';
import { isEscapeEvent } from '../utils/common.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

class PointPresenter {
  #pointListContainer = null;

  #pointComponent = null;
  #editPointComponent = null;

  #changeData = null;
  #changeMode = null;

  #point = null;
  #destinations = [];
  #offers = [];

  #mode = Mode.DEFAULT;

  constructor(pointListContainer, changeData, changeMode) {
    this.#pointListContainer = pointListContainer;

    this.#changeData = changeData;
    this.#changeMode = changeMode;
  }

  init = (point, destinations, offers) => {
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;

    const prevPointComponent = this.#pointComponent;
    const prevEditPointComponent = this.#editPointComponent;

    this.#pointComponent = new PointView(point);
    this.#editPointComponent = new EditPointView(point, destinations, offers);

    this.#pointComponent.setRollupButtonClickHandler(this.#handleEditClick);
    this.#editPointComponent.setSaveHandler(this.#handleFormSubmit);
    this.#editPointComponent.setRollupButtonClickHandler(this.#handleEditReClick);
    this.#pointComponent.setOnFavoriteClick(this.#handleFavoriteClick);

    if (prevPointComponent === null || prevEditPointComponent === null) {
      render(this.#pointListContainer, this.#pointComponent, RenderPosition.BEFORE_END);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#editPointComponent, prevEditPointComponent);
    }

    remove(prevPointComponent);
    remove(prevEditPointComponent);
  }

  destroy = () => {
    remove(this.#pointComponent);
    remove(this.#editPointComponent);
  }

  resetView = () => {
    if (this.#mode !== Mode.DEFAULT) {
      //this.#editPointComponent.reset(this.#point);
      this.#replaceFormToPoint();
    }
  };

  #replacePointToForm = () => {
    replace(this.#editPointComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#onEscKeyDown);
    this.#changeMode();
    this.#mode = Mode.EDITING;
  };

  #replaceFormToPoint = () => {
    replace(this.#pointComponent, this.#editPointComponent);
    document.removeEventListener('keydown', this.#onEscKeyDown);
    this.#mode = Mode.DEFAULT;
  };

  #onEscKeyDown = (evt) => {
    if (isEscapeEvent(evt)) {
      evt.preventDefault();
      this.#replaceFormToPoint();
    }
  };

  #handleEditClick = () => {
    this.#replacePointToForm();
  };

  #handleFavoriteClick = () => {
    this.#changeData({ ...this.#point, isFavorite: !this.#point.isFavorite });
  }

  #handleFormSubmit = (point) => {
    this.#changeData(point);
    this.#replaceFormToPoint();
  }

  #handleEditReClick = () => {
    this.#replaceFormToPoint();
  }

}

export { PointPresenter }
