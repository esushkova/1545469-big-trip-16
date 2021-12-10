const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const RenderPosition = {
  BEFORE_BEGIN: 'beforebegin',
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER_END: 'afterend',
};

export { renderTemplate, RenderPosition };
