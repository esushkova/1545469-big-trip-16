//import MenuView from './view/menu-view.js';
//import FiltersView from './view/filters-view.js';
//import SortView from './view/sort-view.js';
//import PointView from './view/point-view.js';
//import EditPointView from './view/edit-point-view.js';
import PointListView from './view/point-list-view.js';
//import NoPointView from './view/no-point-view.js';
//import { render, RenderPosition, replace } from './utils/render.js';
//import { isEscapeEvent } from './utils/common.js';
import { points } from './mock/point.js';
import { TripPresenter } from './presenter/trip-presenter.js';
//const tripContainer = document.querySelector('.page-body__page-main').querySelector('.page-body__container');


//const menuContainer = document.querySelector('.trip-controls__navigation');
//const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');

//const pointListView = new PointListView();

//render(menuContainer, new MenuView(), RenderPosition.AFTER_BEGIN);
//render(filtersContainer, new FiltersView(), RenderPosition.AFTER_BEGIN);
//render(contentContainer, new SortView(), RenderPosition.AFTER_BEGIN);
//render(contentContainer, pointListView, RenderPosition.BEFORE_END);

/*
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

  pointView.setEditClick(() => {
    replacePointToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointEditView.setFormSubmit(() => {
    replaceFormToPoint();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointEditView.setEditClicButton(() => {
    replaceFormToPoint();
    document.addEventListener('keydown', onEscKeyDown);
  });

  render(container, pointView, RenderPosition.BEFORE_END);
};


const renderPointCheck = (somePoints) => {
  if (somePoints.length === 0) {
    render(pointListView, new NoPointView(), RenderPosition.BEFORE_END);
  } else {
    somePoints.forEach((point) => {
      renderPoint(pointListView, point);
    });
  }
};

renderPointCheck(points);

*/

const tripPresenter = new TripPresenter(contentContainer);
tripPresenter.init(points);
