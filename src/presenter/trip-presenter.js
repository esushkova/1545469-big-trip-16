import MenuView from '../view/menu-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import NoPointView from '../view/no-point-view.js';
import TripMainInfoView from '../view/trip-main-info-view.js';

import { render, RenderPosition } from '../utils/render.js';
import { PointPresenter } from './point-presenter.js';
import { updateItemById, sortPointByPrice } from '../utils/common.js';
import { SortType } from '../const.js';


const tripInfoContainer = document.querySelector('.trip-main');
const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');

class TripPresenter {
  #tripContainer = null;

  #menuComponent = new MenuView();
  #filtersComponent = new FiltersView();
  #sortComponent = new SortView();
  #pointListComponent = new PointListView();
  #noPointComponent = new NoPointView();
  #tripInfoComponent = new TripMainInfoView();

  #points = [];
  #destinations = [];
  #offers = [];

  #pointPresenter = new Map();
  #currentSortType = SortType.DEFAULT;
  #sourcedPoints = [];


  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
  }

  init = (points, destinations, offers) => {
    this.#points = [...points];
    this.#sourcedPoints = [...points];
    this.#destinations = destinations;
    this.#offers = offers;
    render(this.#tripContainer, this.#pointListComponent, RenderPosition.BEFORE_END);

    this.#renderTrip();
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItemById(this.#points, updatedPoint);
    this.#sourcedPoints = updateItemById(this.#sourcedPoints, updatedPoint);
    this.#pointPresenter.get(updatedPoint.id).init(updatedPoint, this.#destinations, this.#offers);
  }


  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  }

  #renderMenu = () => {
    render(menuContainer, this.#menuComponent, RenderPosition.AFTER_BEGIN);
  }

  #renderFilters = () => {
    render(filtersContainer, this.#filtersComponent, RenderPosition.AFTER_BEGIN);
  }

  #sortPoints = (sortType) => {
    switch (sortType) {
      case SortType.PRICE:
        this.#points.sort(sortPointByPrice);
        break;
      default:
        this.#points = [...this.#sourcedPoints];
    }
    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    // - Сортируем задачи
    // - Очищаем список
    // - Рендерим список заново


    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPointList();

  };

  #renderSort = () => {
    render(this.#tripContainer, this.#sortComponent, RenderPosition.AFTER_BEGIN);
    this.#sortComponent.setTripSortChangeHandler(this.#handleSortTypeChange);
  }

  #renderPointList = () => {
    render(this.#tripContainer, this.#pointListComponent, RenderPosition.BEFORE_END);
    this.#renderPoints(0, this.#points.length);
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter(this.#pointListComponent, this.#handlePointChange, this.#handleModeChange);
    pointPresenter.init(point, this.#destinations, this.#offers);
    this.#pointPresenter.set(point.id, pointPresenter);
  }

  #clearPointList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  }

  #renderPoints = () => {
    this.#points.forEach(point => {
      this.#renderPoint(point)
    });
  };

  #renderNoPoints = () => {
    render(this.#pointListComponent, this.#noPointComponent, RenderPosition.BEFORE_END);
  }

  #renderTripInfo = () => {
    this.#tripInfoComponent = new TripMainInfoView();
    render(tripInfoContainer, this.#tripInfoComponent, RenderPosition.AFTER_BEGIN);
  };

  #renderTrip = () => {

    this.#renderTripInfo();
    this.#renderMenu();
    this.#renderFilters();
    this.#renderSort();

    if (this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderPointList();
  };
}

export { TripPresenter }
