const ESCAPE_KEYS = ['Escape', 'Esc'];

export const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const isEscapeEvent = (evt) => ESCAPE_KEYS.includes(evt.key);

export const updateItem = (items, update) => {
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

const sortPrice = (point1, point2) => {
  if (point1.price >= point2.price) {
    return -1;
  }
  return 1;
};

export { sortPrice };
