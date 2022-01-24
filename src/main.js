import { points, destinations, offers } from './mock/point.js';
import TripPresenter from './presenter/trip-presenter.js';
import TripMainInfoPresenter from './presenter/main-info-presenter.js';
import InfoCostPresenter from './presenter/info-cost-presenter.js';

const contentContainer = document.querySelector('.trip-events');
const tripMainContainer = document.querySelector('.trip-main');
const tripMainInfo = tripMainContainer.querySelector('.trip-main__trip-info');

const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');

const tripMainInfoPresenter = new TripMainInfoPresenter(tripMainInfo);
tripMainInfoPresenter.init(points);

const infoCostPresenter = new InfoCostPresenter(tripMainInfo);
infoCostPresenter.init(points);

const tripPresenter = new TripPresenter(contentContainer, menuContainer, filtersContainer);
tripPresenter.init(points, destinations, offers);
