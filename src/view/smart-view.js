import AbstractView from './abstract-view.js';

export default class SmartView extends AbstractView {
  _data = {};

  updateData = (update, isJustDataUpdating = true) => {
    if (!update) {
      return;
    }

    this._data = { ...this._data, ...update };

    if (isJustDataUpdating) {
      return;
    }

    this.updateElement();
  }

  updateElement = () => {
    const prevUnit = this.element;
    const parent = prevUnit.parentElement;
    this.removeElement();

    const newUnit = this.element;

    parent.replaceChild(newUnit, prevUnit);

    this.restoreHandlers();
  }


  restoreHandlers = () => {
    throw new Error('Abstract method not implemented: restoreHandlers');
  }
}
