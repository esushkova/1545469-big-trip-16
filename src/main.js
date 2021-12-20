import MenuView from './view/menu-view.js';
import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import PointView from './view/point-view.js';
import EditPointView from './view/edit-point-view.js';
import PointListView from './view/point-list-view.js';
import NoPointView from './view/no-point-view.js';
import { render, RenderPosition, replace } from './utils/rendered.js';
import { isEscapeEvent } from './utils/common.js';
import { points, destinations, offers } from './mock/point.js';

const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');

const pointListView = new PointListView();

render(menuContainer, new MenuView(), RenderPosition.AFTER_BEGIN);
render(filtersContainer, new FiltersView(), RenderPosition.AFTER_BEGIN);
render(contentContainer, new SortView(), RenderPosition.AFTER_BEGIN);
render(contentContainer, pointListView.element, RenderPosition.BEFORE_END);

const renderPoint = (container, point) => {
  const pointView = new PointView(point);
  const pointEditView = new EditPointView(point, destinations, offers);

  const replacePointToForm = () => {
    replace(pointEditView, pointView);
  };

  const replaceFormToPoint = () => {
    replace(pointView, pointEditView);
  };

  const onEscKeyDown = (evt) => {
    if (isEscapeEvent(evt)) {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  pointView.setEditClickHandler(() => {
    replacePointToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointEditView.setFormSubmitHandler(() => {
    replaceFormToPoint();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointEditView.setEditClicButtonkHandler(() => {
    replaceFormToPoint();
    document.addEventListener('keydown', onEscKeyDown);
  });

  render(container, pointView, RenderPosition.BEFORE_END);
};

const renderPointCheck = (points) => {
  if (points.length === 0) {
    render(pointListView, new NoPointView(), RenderPosition.BEFORE_END);
  } else {
    points.forEach((point) => {
      renderPoint(pointListView, point);
    });
  }
}

renderPointCheck(points)
