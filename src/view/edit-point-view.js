import { POINT_TYPES } from '../const.js';
import dayjs from 'dayjs';
import { capitalizeFirstLetter } from '../utils/common.js';
import SmartView from './smart-view.js';


/*
{
        'id': 7,
        'title': 'Upgrade to a business class',
        'price': 100
      }
**/
const createOffersListTemplate = (allOffers) => (
  `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
      ${allOffers.map(({ id, title, price, isChecked = false }) =>
    `<div class="event__offer-selector">
          <input
          class="event__offer-checkbox  visually-hidden"
          id="${id}"
          type="checkbox"
          name="${title}"
          data-price="${price}"
          ${isChecked ? 'checked' : ''}
          >
          <label class="event__offer-label" for="${id}">
            <span class="event__offer-title">${title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${price}</span>
          </label>
        </div>`).join('')}
      </div>
    </section>`
);

const createDestinationListTemplate = (destinations) =>
  destinations.map(({ name }) => `<option value="${name}"></option>`).join('');

const getRenderedOffers = (point, allOffers) => {
  const pointOffers = point.offers;
  const typeOffers = allOffers.find((offer) => offer.type === point.type).offers || [];

  const offers = [];
  typeOffers.forEach((typeOffer) => {
    offers.push({
      ...typeOffer,
      isChecked: pointOffers.some((offer) => offer.id === typeOffer.id),
    });
  });

  return offers;
};

const createTypeItemTemplate = (type, pointType) => (
  `<div class="event__type-item">
        <input
          id="event-type-${type}-1"
          class="event__type-input  visually-hidden"
          type="radio"
          name="event-type"
          value="${type}"
          ${type === pointType ? 'checked' : ''}
          >
        <label class="event__type-label event__type-label--${type}" for="event-type-${type}-1">
          ${capitalizeFirstLetter(type)}
        </label>
      </div>`
);

const createEventTypeTemplate = (pointTypes, pointType) => (
  pointTypes
    .map((type) => createTypeItemTemplate(type, pointType))
    .join('')
);

const createDestinationPicturesTemplate = (destination) =>
  `<div class="event__photos-container">
    <div class="event__photos-tape">
      ${destination.pictures.map(({ src, description }) => `<img class="event__photo" src="${src}" alt="${description}">`).join('')}
    </div>
  </div>`;

const createDestinationTemplate = (destination) =>
  `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${destination.description}</p>

    ${destination.pictures.length > 0 ? createDestinationPicturesTemplate(destination) : ''}

    </section>`;

const createEditPointTemplate = (data) => {
  const {
    type,
    startDate,
    finishDate,
    destination,
    basePrice,
    destinations,
    renderedOffers,
    hasOffers,
    hasDestination,
  } = data;

  const startTime = dayjs(startDate);
  const endTime = dayjs(finishDate);

  return `<li class="trip-events__item">
<form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${createEventTypeTemplate(POINT_TYPES, type)}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
      </label>
      <input
      class="event__input  event__input--destination"
      id="event-destination-1"
      type="text"
      name="event-destination"
      value="${destination.name}"
      list="destination-list-1">
      <datalist id="destination-list-1">
      ${createDestinationListTemplate(destinations)}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startTime.format('DD/MM/YY HH:mm')}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endTime.format('DD/MM/YY HH:mm')}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="number" name="event-price" value="${basePrice}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Close</button>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>

  </header>
  <section class="event__details">

  ${hasOffers ? createOffersListTemplate(renderedOffers) : ''}
  ${hasDestination ? createDestinationTemplate(destination) : ''}

  </section>
</form>
</li>`;
};

export default class EditPointView extends SmartView {
  #destinations = [];
  #offers = [];

  constructor(point, destinations, offers) {
    super();

    this.#destinations = destinations;
    this.#offers = offers;

    this._data = EditPointView.parsePointToData(point, destinations, offers);

    this.#setInnerHandlers();
  }

  get template() {
    return createEditPointTemplate(this._data);
  }


  reset = (point) => {

    this.updateData(
      this._data = EditPointView.parsePointToData(point, this.#destinations, this.#offers)
    );

    this.updateElement();
  }

  restoreHandlers = () => {
    this.#setInnerHandlers();
    this.setSaveHandler(this._callback.submitForm);
    this.setRollupButtonClickHandler(this._callback.rollupForm);
  }

  setSaveHandler = (callback) => {
    this._callback.submitForm = callback;
    this.element.querySelector('form').addEventListener('submit', this.#onFormSubmit);
  }

  setRollupButtonClickHandler = (callback) => {
    this._callback.rollupForm = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#onRollupButtonClick);
  }

  #onFormSubmit = (evt) => {
    evt.preventDefault();

    this.updateData({
      offers: this.#parseOffersCheckbox(),
    }, true);

    this._callback.submitForm(EditPointView.parseDataToPoint(this._data));
  }

  #onRollupButtonClick = (evt) => {
    evt.preventDefault();
    this._callback.rollupForm();
  }

  #setInnerHandlers = () => {
    const element = this.element;

    element.querySelector('.event__type-group').addEventListener('change', this.#onTypeChange);
    element.querySelector('.event__input--price').addEventListener('input', this.#onPriceChange);

    const destination = element.querySelector('.event__input--destination');

    destination.addEventListener('change', this.#onDestinationChange);
    destination.addEventListener('keydown', this.#onDestinationKeydown);
    destination.addEventListener('focus', this.#onDestinationFocus);
  }

  #onTypeChange = (evt) => {
    evt.preventDefault();

    this.updateData({
      type: evt.target.value,
      offer: this.#offers.find(({ type }) => evt.target.value === type).offers,
    });
  }

  #onPriceChange = (evt) => {
    evt.preventDefault();
    this.updateData({ basePrice: evt.target.valueAsNumber }, true);
  };

  #onDestinationChange = (evt) => {
    evt.preventDefault();

    const newDestination = evt.target.value;
    const destination = this.#destinations.find(({ name }) => name === newDestination);

    this.updateData({ destination }, false);
  };

  #onDestinationKeydown = (evt) => {
    evt.preventDefault();
  }

  #onDestinationFocus = (evt) => {
    const target = evt.target;

    target.placeholder = target.value;
    target.value = '';

    target.addEventListener('blur', () => {
      target.value = target.placeholder;
    }, { once: true });
  }

  #parseOffersCheckbox = () => {

    const offersCollection = this.element.querySelectorAll('.event__offer-checkbox:checked');

    const checkedOffers = [];

    offersCollection.forEach((offer) => {
      const checkedOffer = {};
      checkedOffer.id = Number(offer.id);
      checkedOffer.title = offer.name;
      checkedOffer.price = Number(offer.dataset.price);

      checkedOffers.push(checkedOffer);
    });

    return checkedOffers;
  }


  static parsePointToData = (point, destinations, offers) => {
    const renderedOffers = getRenderedOffers(point, offers);
    const { description, pictures } = point.destination;

    return {
      ...point,
      renderedOffers,
      destinations,
      hasOffers: renderedOffers.length > 0,
      hasDestination: description.length > 0 || pictures.length > 0,
    };
  };

  static parseDataToPoint = (data) => {
    const point = { ...data };

    delete point.renderedOffers;
    delete point.destinations;
    delete point.hasOffers;
    delete point.hasDestination;

    return point;
  }
}
