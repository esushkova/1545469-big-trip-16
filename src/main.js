import {createMenuTemplate} from './view/menu-view.js';
import {createFiltersTemplate} from './view/filters-view.js';
import {createSortTemplate} from './view/sort-view.js';

const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');
const contentContainer = document.querySelector('.trip-events');


renderTemplate(menuContainer, createMenuTemplate(), RenderPosition.AFTERBEGIN)
renderTemplate(filtersContainer, createFiltersTemplate(), RenderPosition.AFTERBEGIN)
renderTemplate(contentContainer, createSortTemplate(), RenderPosition.AFTERBEGIN)
