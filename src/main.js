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

render(menuContainer, new MenuView().element, RenderPosition.AFTER_BEGIN);
render(filtersContainer, new FiltersView().element, RenderPosition.AFTER_BEGIN);
render(contentContainer, new SortView().element, RenderPosition.AFTER_BEGIN);
render(contentContainer, new PointListView().element, RenderPosition.BEFORE_END);


const pointList = document.querySelector('.trip-events__list');

const point1 = points[0];

const point1Offers = offers.find((offer) => offer.type === point1.type).offers || [];


render(pointList, new EditPointView(point1, destinations, point1Offers).element, RenderPosition.AFTER_BEGIN);



const renderPoint = (pointListElement, point) => {
  const pointComponent = new PointView(point);
 // const pointEditComponent = new EditPointView(point1, destinations, point1Offers);

  render(pointListElement, pointComponent.element, RenderPosition.BEFORE_END)

  //render(pointListElement, pointEditComponent.element, RenderPosition.AFTER_BEGIN)

  /*
  const replacePointToForm = () => {
    pointListElement.replaceChild(pointEditComponent.element, pointComponent.element);
  }

  const replaceFormToPoint = () => {
    pointListElement.replaceChild(pointComponent.element, pointEditComponent.element);
  }
*/
};

  points.forEach((point) => {
    renderPoint(pointList, point)
  });



