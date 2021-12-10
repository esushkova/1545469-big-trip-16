import { POINT_TYPES } from '../const.js';
import dayjs from 'dayjs';

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


const createEditPointTemplate = (point, destinations, typeOffers) => {
  const { type, startDate, finishDate, offers, destination, basePrice } = point;

  const checkPointType = (pointType) => type === pointType ? 'checked' : '';

  const createEventType = (arrayPointTypes) => (
    arrayPointTypes
    .map((item) => (
      `<div class="event__type-item">
            <input id="event-type-${item}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}" ${checkPointType(item)}>
            <label class="event__type-label  event__type-label--${item}" for="event-type-${item}-1">${item}</label>
          </div>`
    ))
    .join('')
  );

  const allOffers = [];
  typeOffers.forEach((typeOffer) => {
    allOffers.push({
      ...typeOffer,
      isChecked: offers.some((offer) => offer.id === typeOffer.id),
    });
  });

  const offersTemplate = createOffersListTemplate(allOffers);

  const startTime = dayjs(startDate);
  const endTime = dayjs(finishDate);

  const createDestinationPicturesTemplate = () =>
  `<div class="event__photos-container">
    <div class="event__photos-tape">
      ${destination.pictures.map(({src, description}) =>`<img class="event__photo" src="${src}" alt="${description}">`).join('')}
    </div>
  </div>`;

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
          ${createEventType(POINT_TYPES)}
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
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
    </div>

    <button class="event__reset-btn" type="reset">Close</button>

    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>

  </header>
  <section class="event__details">

  ${offersTemplate}

    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destination.description}</p>

      ${destination.pictures.length > 0 ? createDestinationPicturesTemplate() : ''}

    </section>
  </section>
</form>
</li>`;
};

export { createEditPointTemplate };
