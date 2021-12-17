import MenuView from './view/menu-view.js';
import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import PointView from './view/point-view.js';
import EditPointView from './view/edit-point-view.js';
import PointListView from './view/list-view.js';
import { render, RenderPosition } from './utils.js';
import { points, destinations, offers } from './mock/point.js';

const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');

const pointListView = new PointListView();

render(menuContainer, new MenuView().element, RenderPosition.AFTER_BEGIN);
render(filtersContainer, new FiltersView().element, RenderPosition.AFTER_BEGIN);
render(contentContainer, new SortView().element, RenderPosition.AFTER_BEGIN);
render(contentContainer, pointListView.element, RenderPosition.BEFORE_END);

const renderPoint = (container, point) => {
  const pointView = new PointView(point);
  const pointEditView = new EditPointView(point, destinations, offers);

  const replacePointToForm = () => {
    pointListView.element.replaceChild(pointEditView.element, pointView.element);
  }

  const replaceFormToPoint = () => {
    pointListView.element.replaceChild(pointView.element, pointEditView.element);
  }

  pointView.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    replacePointToForm();
  });

  pointEditView.element.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToPoint();
  });

  render(container, pointView.element, RenderPosition.BEFORE_END)
};

points.forEach((point) => {
  renderPoint(pointListView.element, point)
});
