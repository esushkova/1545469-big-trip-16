import dayjs from 'dayjs';

const ESCAPE_KEYS = ['Escape', 'Esc'];
const ZERO_FRONTIER = 10;

export const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const isEscapeEvent = (evt) => ESCAPE_KEYS.includes(evt.key);

/*
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
*/

export const sortPointByPrice = (point1, point2) => point1.basePrice - point2.basePrice;

export const sortPointByTime = (point1, point2) => (point2.finishDate - point2.startDate) - (point1.finishDate - point1.startDate);

export const sortPointByDay = (point1, point2) => point1.startDate - point2.startDate;

export const transformDate = (date, format) => dayjs(date).format(format);

export const getFirstItem = (items) => items[0];

export const getLastItem = (items) => items[items.length - 1];

const addZero = (count) => {
  if (count < ZERO_FRONTIER) {
    return `0${count}`;
  }
  return count;
};

export const calcDatesDiff = (timeStart, timeEnd) => {
  const minutesDuration = timeEnd.diff(timeStart, 'minutes') % 60 > 0 ? `${addZero(timeEnd.diff(timeStart, 'minutes') % 60)}M` : '';
  const hoursDuration = timeEnd.diff(timeStart, 'hours') % 24 > 0 ? `${addZero(timeEnd.diff(timeStart, 'hours') % 24)}H ` : '';
  const daysDuration = timeEnd.diff(timeStart, 'days') > 0 ? `${addZero(timeEnd.diff(timeStart, 'days'))}D ` : '';

  return daysDuration + hoursDuration + minutesDuration;
};
