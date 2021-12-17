export const RenderPosition = {
  BEFORE_BEGIN: 'beforebegin',
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER_END: 'afterend',
};

export const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.BEFORE_BEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTER_BEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFORE_END:
      container.append(element);
      break;
    case RenderPosition.AFTER_END:
      container.after(element);
      break;
  }
};

export const createElement = (template) => {
  const wrap = document.createElement('div');
  wrap.innerHTML = template;

  return wrap.firstElementChild;
};

export const capitalizeFirstLetter = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const ESCAPE_KEYS = ['Escape', 'Esc'];

export const isEscapeEvent = (evt) => ESCAPE_KEYS.includes(evt.key);
