import AbstractView from './abstract-view.js';

const createFilterTemplate = (name, title, isChecked = false) => (
  `<div class="trip-filters__filter">
    <input
      id="filter-${name}"
      class="trip-filters__filter-input visually-hidden"
      type="radio"
      name="trip-filter"
      value="${name}"
      ${isChecked ? 'checked' : ''}
    >
    <label class="trip-filters__filter-label" for="filter-${name}">${title}</label>
  </div>`
);

const createFiltersTemplate = () => (
  `<form class="trip-filters" action="#" method="get">
    ${createFilterTemplate('everything', 'Everything', true)}
    ${createFilterTemplate('future', 'Future')}
    ${createFilterTemplate('past', 'Past')}
    <button class="visually-hidden" type="submit">Accept filter</button>
   </form>`
);

export default class FiltersView extends AbstractView{
  get template() {
    return createFiltersTemplate();
  }
}
