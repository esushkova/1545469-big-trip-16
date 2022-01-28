import MenuView from '../view/menu-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import NoPointView from '../view/no-point-view.js';

import { render, RenderPosition } from '../utils/render.js';
import PointPresenter from './point-presenter.js';
import { sortPointByPrice, sortPointByTime, sortPointByDay } from '../utils/common.js';
import { SortType, UpdateType, UserAction } from '../const.js';

export default class TripPresenter {
  #tripContainer = null;
  #menuContainer = null;
  #filtersContainer = null;

  #pointsModel = null;

  #menuComponent = new MenuView();
  #filtersComponent = new FiltersView();
  #sortComponent = new SortView();
  #pointListComponent = new PointListView();
  #noPointComponent = new NoPointView();

  #points = [];
  #destinations = [];
  #offers = [];

  #pointPresenter = new Map();
  #currentSortType = SortType.DEFAULT;

  constructor(tripContainer, menuContainer, filtersContainer, pointsModel) {
    this.#tripContainer = tripContainer;
    this.#menuContainer = menuContainer;
    this.#filtersContainer = filtersContainer;

    this.#pointsModel = pointsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  get points() {

    switch (this.#currentSortType) {
      case SortType.PRICE:
        return [...this.#pointsModel.points].sort(sortPointByPrice);
      case SortType.TIME:
        return [...this.#pointsModel.points].sort(sortPointByTime);
      case SortType.DAY:
        return [...this.#pointsModel.points].sort(sortPointByDay);
    }

    return this.#pointsModel.points;
  }

  init = (destinations, offers) => {
    this.#destinations = destinations;
    this.#offers = offers;

    this.#renderTrip();

    render(this.#tripContainer, this.#pointListComponent, RenderPosition.BEFORE_END);
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updateTask(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addTask(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deleteTask(updateType, update);
        break;
    }  }

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        // - обновить часть списка (например, когда поменялось описание)
        this.#pointPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        // - обновить список (например, когда задача ушла в архив)
        break;
      case UpdateType.MAJOR:
        // - обновить всю доску (например, при переключении фильтра)
        break;
    }  }

  #handleModeChange = () => {
    this.#pointPresenter.forEach((presenter) => presenter.resetView());
  }

  #renderMenu = () => {
    render(this.#menuContainer, this.#menuComponent, RenderPosition.AFTER_BEGIN);
  }

  #renderFilters = () => {
    render(this.#filtersContainer, this.#filtersComponent, RenderPosition.AFTER_BEGIN);
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
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
    const pointPresenter = new PointPresenter(this.#pointListComponent, this.#handleViewAction, this.#handleModeChange);
    pointPresenter.init(point, this.#destinations, this.#offers);
    this.#pointPresenter.set(point.id, pointPresenter);
  }

  #clearPointList = () => {
    this.#pointPresenter.forEach((presenter) => presenter.destroy());
    this.#pointPresenter.clear();
  }

  #renderPoints = (points) => {
    points.forEach((point) => {
      this.#renderPoint(point);
    });
  };

  #renderNoPoints = () => {
    render(this.#pointListComponent, this.#noPointComponent, RenderPosition.BEFORE_END);
  }

  #renderTrip = () => {
    this.#renderMenu();
    this.#renderFilters();
    this.#renderSort();

    if (this.points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderPointList();
  };
}
