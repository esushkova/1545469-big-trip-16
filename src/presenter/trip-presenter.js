import MenuView from '../view/menu-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import NoPointView from '../view/no-point-view.js';

import { render, RenderPosition } from '../utils/render.js';
import PointPresenter from './point-presenter.js';
import { updateItemById, sortPointByPrice, sortPointByTime, sortPointByDay } from '../utils/common.js';
import { SortType } from '../const.js';

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
  #sourcedPoints = [];

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
    console.log(actionType, updateType, update);
    // Здесь будем вызывать обновление модели.
    // actionType - действие пользователя, нужно чтобы понять, какой метод модели вызвать
    // updateType - тип изменений, нужно чтобы понять, что после нужно обновить
    // update - обновленные данные
  }

  #handleModelEvent = (updateType, data) => {
    console.log(updateType, data);
    // В зависимости от типа изменений решаем, что делать:
    // - обновить часть списка (например, когда поменялось описание)
    // - обновить список (например, когда задача ушла в архив)
    // - обновить всю доску (например, при переключении фильтра)
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
    points.forEach((point) => this.#renderPoint(point));
  }

  #renderPointList = () => {
    this.#renderPoints();
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
