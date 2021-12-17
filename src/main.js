import MenuView from './view/menu-view.js';
import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import PointView from './view/point-view.js';
import EditPointView from './view/edit-point-view.js';
import PointListView from './view/list-view.js';
import NoPointView from './view/no-point-view.js';
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
  };

  const replaceFormToPoint = () => {
    pointListView.element.replaceChild(pointView.element, pointEditView.element);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  pointView.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    replacePointToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointEditView.element.querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToPoint();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointEditView.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    replaceFormToPoint();
  });

  render(container, pointView.element, RenderPosition.BEFORE_END);
};

const renderPointCheck = (points) => {
  if (points.length === 0) {
    render(pointListView.element, new NoPointView().element, RenderPosition.BEFORE_END);
  } else {
    points.forEach((point) => {
      renderPoint(pointListView.element, point);
    });
    }
}

renderPointCheck(points)
