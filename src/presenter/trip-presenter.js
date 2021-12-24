import MenuView from '../view/menu-view.js';
import FiltersView from '../view/filters-view.js';
import SortView from '../view/sort-view.js';
import PointListView from '../view/point-list-view.js';
import NoPointView from '../view/no-point-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/edit-point-view.js';
import { render, RenderPosition, replace } from '../utils/render.js';
import { points } from '../mock/point.js';
import { PointPresenter } from './point-presenter.js';


const tripInfoContainer = document.querySelector('.trip-main');
const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');

export default class TripPresenter {
  #tripContainer = null;


  #menuComponent = new MenuView();
  #filtersComponent = new FiltersView();
  #sortComponent = new SortView();
  #pointListComponent = new PointListView();
  #noPointComponent = new NoPointView();

  #points = [];

  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
  }

  init = (points) => {
    this.#points = [...points];
    render(this.#tripContainer, this.#pointListComponent, RenderPosition.BEFORE_END);

    this.#renderTrip();
  }

  #renderMenu = () => {
    render(menuContainer, this.#menuComponent, RenderPosition.AFTER_BEGIN);
  }

  #renderFilters = () => {
    render(filtersContainer, this.#filtersComponent, RenderPosition.AFTER_BEGIN);
  }

  #renderSort = () => {
    render(this.#tripContainer, this.#sortComponent, RenderPosition.BEFORE_END);
  }

  #rendePointList = () => {
    //код для отрисовки всех точек
      points.forEach((point) => {
        this.#renderPoint(this.#pointListComponent, point);
      });
  }

  #renderPoint = (point) => {

    const pointPresenter = new PointPresenter(this.#pointListComponent);
    pointPresenter.init(point);
  }

  #renderNoPoints = () => {
    render(this.#pointListComponent, this.#noPointComponent, RenderPosition.BEFORE_END);
  }

  /*
  #renderTripInfo = () => {
  написать компонент
  }
  */

  #renderTrip = () => {

    //this.#renderTripInfo();
    this.#renderMenu();
    this.#renderFilters();
    this.#renderSort();

    if (this.#points.length === 0) {
      this.#renderNoPoints();
    }

    this.#rendePointList();
  };
}

export {TripPresenter}
