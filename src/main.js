import MenuView from './view/menu-view.js';
import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import PointView from './view/point-view.js';

import { createEditPointTemplate } from './view/edit-point-view.js';
//import EditPointView from './view/edit-point-view.js';

import PointListView from './view/list-view.js';

import { renderTemplate, renderElement, RenderPosition } from './utils.js';
import { points, destinations, offers } from './mock/point.js';

const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');

renderElement(menuContainer, new MenuView().element, RenderPosition.AFTER_BEGIN);
renderElement(filtersContainer, new FiltersView().element, RenderPosition.AFTER_BEGIN);
renderElement(contentContainer, new SortView().element, RenderPosition.AFTER_BEGIN);
renderElement(contentContainer, new PointListView().element, RenderPosition.BEFORE_END);


const pointList = document.querySelector('.trip-events__list');

points.forEach((point) => {
  renderElement(pointList, new PointView(point).element, RenderPosition.BEFORE_END);
});

const point1 = points[0];

const point1Offers = offers.find((offer) => offer.type === point1.type).offers || [];

renderTemplate(pointList, createEditPointTemplate(point1, destinations, point1Offers), RenderPosition.AFTER_BEGIN);

//renderElement(pointList, new EditPointView(point1, destinations, point1Offers).element, RenderPosition.AFTER_BEGIN);
