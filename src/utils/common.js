const ESCAPE_KEYS = ['Escape', 'Esc'];

export const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const isEscapeEvent = (evt) => ESCAPE_KEYS.includes(evt.key);
