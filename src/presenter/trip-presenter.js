import MenuView from '../view/menu-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import NoPointView from '../view/no-point-view.js';
import TripMainInfoView from '../view/trip-main-info-view.js';
import TripTitleDatesView from '../view/trip-title-dates-view.js';
import TripCostView from '../view/trip-cost-view.js';


import { render, RenderPosition } from '../utils/render.js';
import PointPresenter from './point-presenter.js';
import { updateItemById, sortPointByPrice, sortPointByTime, sortPointByDay } from '../utils/common.js';
import { SortType } from '../const.js';

export default class TripPresenter {
  #tripContainer = null;
  #tripInfoContainer = null;
  #menuContainer = null;
  #filtersContainer = null;

  #menuComponent = new MenuView();
  #filtersComponent = new FiltersView();
  #sortComponent = new SortView();
  #pointListComponent = new PointListView();
  #noPointComponent = new NoPointView();
  #tripInfoComponent = new TripMainInfoView();

  #tripTitleDatesComponent = new TripTitleDatesView();
  #tripCostComponent = new TripCostView();

  #points = [];
  #destinations = [];
  #offers = [];

  #pointPresenter = new Map();
  #currentSortType = SortType.DEFAULT;
  #sourcedPoints = [];

  constructor(tripContainer, tripInfoContainer, menuContainer, filtersContainer) {
    this.#tripContainer = tripContainer;
    this.#tripInfoContainer = tripInfoContainer;
    this.#menuContainer = menuContainer;
    this.#filtersContainer = filtersContainer;
  }

  init = (points, destinations, offers) => {
    this.#points = [...points].sort(sortPointByDay);
    this.#sourcedPoints = [...points];
    this.#destinations = destinations;
    this.#offers = offers;

    this.#renderTrip();

    render(this.#tripContainer, this.#pointListComponent, RenderPosition.BEFORE_END);
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
    render(this.#menuContainer, this.#menuComponent, RenderPosition.AFTER_BEGIN);
  }

  #renderFilters = () => {
    render(this.#filtersContainer, this.#filtersComponent, RenderPosition.AFTER_BEGIN);
  }

  #sortPoints = (sortType) => {
    switch (sortType) {
      case SortType.PRICE:
        this.#points.sort(sortPointByPrice);
        break;
      case SortType.TIME:
        this.#points.sort(sortPointByTime);
        break;
      case SortType.DAY:
        this.#points.sort(sortPointByDay);
        break;
      default:
        this.#points = [...this.#sourcedPoints];
    }

    this.#currentSortType = sortType;
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortPoints(sortType);
    this.#clearPointList();
    this.#renderPointList();
  };

  #renderSort = () => {
    render(this.#tripContainer, this.#sortComponent, RenderPosition.AFTER_BEGIN);
    this.#sortComponent.setChangeHandler(this.#handleSortTypeChange);
  }

  #renderPointList = () => {
    render(this.#tripContainer, this.#pointListComponent, RenderPosition.BEFORE_END);
    this.#renderPoints();
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
    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  };

  #renderNoPoints = () => {
    render(this.#pointListComponent, this.#noPointComponent, RenderPosition.BEFORE_END);
  }

  #renderTripInfo = (points) => {
    this.#tripInfoComponent = new TripMainInfoView(points);
    render(this.#tripInfoContainer, this.#tripInfoComponent, RenderPosition.AFTER_BEGIN);

    this.#tripTitleDatesComponent = new TripTitleDatesView(points);
    render(this.#tripInfoComponent, this.#tripTitleDatesComponent, RenderPosition.AFTER_BEGIN);

    this.#tripCostComponent = new TripCostView(this.#points);
    render(this.#tripInfoComponent, this.#tripCostComponent, RenderPosition.BEFORE_END);
  };

  #renderTrip = () => {
    this.#renderTripInfo(this.#points);
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
