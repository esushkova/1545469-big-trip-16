import { createMenuTemplate } from './view/menu-view.js';
import { createFiltersTemplate } from './view/filters-view.js';
import { createSortTemplate } from './view/sort-view.js';
import { createPointTemplate } from './view/point-view.js';
import { createEditPointTemplate } from './view/edit-point-view.js';
import { createPointListTemplate } from './view/list-view.js';
import { renderTemplate } from './utils.js';
import { points, destinations, offers, pointTypeToOffers } from './mock/point.js';

const RenderPosition = {
  BEFORE_BEGIN: 'beforebegin',
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER_END: 'afterend',
};

const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');

renderTemplate(menuContainer, createMenuTemplate(), RenderPosition.AFTER_BEGIN);
renderTemplate(filtersContainer, createFiltersTemplate(), RenderPosition.AFTER_BEGIN);
renderTemplate(contentContainer, createSortTemplate(), RenderPosition.AFTER_BEGIN);
renderTemplate(contentContainer, createPointListTemplate(), RenderPosition.AFTER_END);

const pointList = document.querySelector('.trip-events__list');

points.forEach((point) => {
  renderTemplate(pointList, createPointTemplate(point), RenderPosition.AFTER_BEGIN);
});

const point1 = points[0];
// const point1Offers = pointTypeToOffers[point1.type]

/*
  {
    type: "taxi",
    offers: [
      {
        "id": 1,
        "title": "Upgrade to a business class",
        "price": 120
      }, {
        "id": 2,
        "title": "Choose the radio station",
        "price": 60
      }
    ]
  },
  // ..
**/

const point1Offers = offers.find((offer) => offer.type === point1.type).offers || [];

renderTemplate(pointList, createEditPointTemplate(point1, destinations, point1Offers), RenderPosition.BEFORE_BEGIN);
