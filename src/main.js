import { createMenuTemplate } from './view/menu-view.js';
import { createFiltersTemplate } from './view/filters-view.js';
import { createSortTemplate } from './view/sort-view.js';
import { createPointTemplate } from './view/point-view.js';
import { editPointTemplate } from './view/edit-point-view.js';
import { createPointListTemplate } from './view/list-view.js';
import {renderTemplate} from './utils.js'
import { points, destinations, offers } from './mock/point.js';
//import {createOfferTemplate} from './view/point-view.js';

const RenderPosition = {
  BEFORE_BEGIN: 'beforebegin',
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER_END: 'afterend',
};

const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');

renderTemplate(menuContainer, createMenuTemplate(), RenderPosition.AFTER_BEGIN)
renderTemplate(filtersContainer, createFiltersTemplate(), RenderPosition.AFTER_BEGIN)
renderTemplate(contentContainer, createSortTemplate(), RenderPosition.AFTER_BEGIN)

renderTemplate(contentContainer, createPointListTemplate(), RenderPosition.AFTER_END)

const pointList = document.querySelector('.trip-events__list');

points.forEach((point) => {
  renderTemplate(pointList, createPointTemplate(point), RenderPosition.AFTER_BEGIN);
});

offers.forEach((offer) => {
renderTemplate(pointList, editPointTemplate(offer), RenderPosition.BEFORE_BEGIN)
});

const offerContainer = document.querySelector('.event__available-offers');
