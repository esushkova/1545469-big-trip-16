import { POINT_TYPES } from '../const.js';
import dayjs from 'dayjs';
import { capitalizeFirstLetter } from '../utils/common.js';
import SmartView from './smart-view.js';

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

const getTypeOffers = (type, allOffers) => allOffers.find((offer) => offer.type === type)?.offers ?? [];

const getRenderedOffers = (offers, typeOffers) => typeOffers
  .map((typeOffer) => ({
    ...typeOffer,
    isChecked: offers.some(({ id }) => id === typeOffer.id),
  }));

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

const createDestinationTemplate = (name) => `<option value="${name}"></option>`;
const createDestinationListTemplate = (destinations) => destinations.map(createDestinationTemplate).join('');

const createEditPointTemplate = (data) => {
  const {
    type,
    startDate,
    finishDate,
    destination,
    basePrice,
    offers,
    destinationNames,
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
      ${createDestinationListTemplate(destinationNames)}
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

  ${hasOffers ? createOffersListTemplate(offers) : ''}
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
      this._data = EditPointView.parsePointToData(point, this.#destinations, this.#offers),
      false,
    );
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

    const point = EditPointView.parseDataToPoint(this._data);
    point.offers = this.#parseOffersCheckbox(); // не реализован

    this._callback.submitForm(point);
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

    const type = evt.target.value;
    const typeOffers = getTypeOffers(type, this.#offers);
    const offers = getRenderedOffers([], typeOffers);

    this.updateData({ type, offers }, false);
  }

  #onPriceChange = (evt) => {
    evt.preventDefault();
    const priceValue = Number(evt.target.value) > 0 ? evt.target.value : '';
    const priceInput = this.element.querySelector('.event__input--price');
    const saveButton = this.element.querySelector('.event__save-btn');

    if (!priceValue) {
      priceInput.setCustomValidity('Invalid value. Cannot be less than zero!');
      priceInput.reportValidity();
      saveButton.disabled = true;
    } else {
      priceInput.setCustomValidity('');
      priceInput.reportValidity();
      saveButton.disabled = false;

      this.updateData({ basePrice: evt.target.valueAsNumber }, true);
    }
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

    const checkedElements = this.element.querySelectorAll('.event__offer-checkbox:checked');

    const checkedOffers = [];

    checkedElements.forEach((offer) => {
      const checkedOffer = {};
      checkedOffer.id = Number(offer.id);
      checkedOffer.title = offer.name;
      checkedOffer.price = Number(offer.dataset.price);

      checkedOffers.push(checkedOffer);
    });

    return checkedOffers;
  }


  static parsePointToData = (point, destinations, allOffers) => {
    const {
      type,
      offers,
      destination: { description, pictures },
    } = point;

    const typeOffers = getTypeOffers(type, allOffers);
    const dataOffers = getRenderedOffers(offers, typeOffers);

    return {
      ...point,
      offers: dataOffers,
      destinationNames: destinations.map(({ name }) => name),
      hasOffers: dataOffers.length > 0,
      hasDestination: description.length > 0 || pictures.length > 0,
    };
  };

  static parseDataToPoint = ({
    destinationNames,
    hasOffers,
    hasDestination,
    ...point
  }) => point;



  static parseDataToPoint = ({
    destinationNames,
    hasOffers,
    hasDestination,
    ...point
  }) => {

    delete point.destinationNames;
    delete point.hasOffers;
    delete point.hasDestination;

    return point;
  }
}
