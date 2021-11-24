import { createMenuTemplate } from './view/menu-view.js';
import { createFiltersTemplate } from './view/filters-view.js';
import { createSortTemplate } from './view/sort-view.js';
import { createPointTemplate } from './view/create-point.js';
import { editPointTemplate } from './view/edit-point.js';
import { createItemPointTemplate } from './view/list-item.js';

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

contentContainer.insertAdjacentHTML(RenderPosition.BEFOREEND, `<ul class="trip-events__list"></ul>`);
const listUl = document.querySelector('.trip-events__list');

for (let i = 1; i <= 3; i++) {
  renderTemplate(listUl, createItemPointTemplate(), RenderPosition.AFTEREND)
}

const pointListItem = document.querySelector('.trip-events__item');

//форма создания
renderTemplate(listUl, createPointTemplate(), RenderPosition.AFTERBEGIN)


//форма редактирования
renderTemplate(pointListItem, editPointTemplate(), RenderPosition.BEFOREBEGIN)



