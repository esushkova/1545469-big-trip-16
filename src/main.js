import { points, destinations, offers } from './mock/point.js';
import TripPresenter from './presenter/trip-presenter.js';

const contentContainer = document.querySelector('.trip-events');
const tripInfoContainer = document.querySelector('.trip-main');
const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');


const tripPresenter = new TripPresenter(contentContainer, tripInfoContainer, menuContainer, filtersContainer);
tripPresenter.init(points, destinations, offers);
