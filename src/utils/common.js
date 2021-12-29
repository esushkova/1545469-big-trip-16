import dayjs from 'dayjs';

const ESCAPE_KEYS = ['Escape', 'Esc'];

export const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const isEscapeEvent = (evt) => ESCAPE_KEYS.includes(evt.key);

export const updateItemById = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];
};

/*
export const sortPointByPrice = (point1, point2) => {
  if (point1.basePrice >= point2.basePrice) {
    return -1;
  }

  if (point1.basePrice === point2.basePrice) {
    return 0;
  }

  return 1;
};
*/

export const sortPointByPrice = (point1, point2) => point1.basePrice - point2.basePrice;

export const sortPointByTime = (point1, point2) => (point2.finishDate - point2.startDate) - (point1.finishDate - point1.startDate);

export const sortPointByDay = (point1, point2) => point1.startDate - point2.startDate;

/*
const getWeightForNullDate = (dateA, dateB) => {
  if (dateA === null && dateB === null) {
    return 0;
  }

  if (dateA === null) {
    return 1;
  }

  if (dateB === null) {
    return -1;
  }

  return null;
};
*/

export const transformDate = (date, format) => dayjs(date).format(format);
