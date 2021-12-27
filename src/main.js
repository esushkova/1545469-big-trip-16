import { points, destinations, offers } from './mock/point.js';
import { TripPresenter } from './presenter/trip-presenter.js';

const contentContainer = document.querySelector('.trip-events');

const tripPresenter = new TripPresenter(contentContainer);
tripPresenter.init(points, destinations, offers);
