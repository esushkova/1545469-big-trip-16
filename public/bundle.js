/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POINT_TYPES": () => (/* binding */ POINT_TYPES),
/* harmony export */   "SortType": () => (/* binding */ SortType)
/* harmony export */ });
const POINT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const SortType = {
  DEFAULT: 'default',
  TIME: 'time',
  PRICE: 'price'
};

/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pointTypeToOffers": () => (/* binding */ pointTypeToOffers),
/* harmony export */   "points": () => (/* binding */ points),
/* harmony export */   "destinations": () => (/* binding */ destinations),
/* harmony export */   "offers": () => (/* binding */ offers)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.dev.js");
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random.js */ "./src/mock/random.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");



const POINT_CITIES = ['Amsterdam', 'Chamonix', 'Paris', 'Moscow'];

const getRandomItemArray = items => _const_js__WEBPACK_IMPORTED_MODULE_1__.POINT_TYPES[(0,_random_js__WEBPACK_IMPORTED_MODULE_0__.getRandomIntInclusive)(0, items.length - 1)];

const getRandomType = () => getRandomItemArray(_const_js__WEBPACK_IMPORTED_MODULE_1__.POINT_TYPES);

const getIsFavourite = () => Boolean((0,_random_js__WEBPACK_IMPORTED_MODULE_0__.getRandomIntInclusive)(0, 1));

const generateDescription = () => {
  const description = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
  const descriptionArray = [];
  const randomCount = (0,_random_js__WEBPACK_IMPORTED_MODULE_0__.getRandomIntInclusive)(1, 5);

  for (let i = 1; i <= randomCount; i++) {
    const randomIndex = (0,_random_js__WEBPACK_IMPORTED_MODULE_0__.getRandomIntInclusive)(0, description.length - 1);
    descriptionArray.push(description[randomIndex]);
  }

  return descriptionArray;
};

const destinations = [{
  description: generateDescription(),
  name: 'Rome',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.0762563005163317',
    description: '[photo description]'
  }, {
    src: 'http://picsum.photos/300/200?r=0.0762563005163318',
    description: '[photo description]'
  }]
}, {
  description: generateDescription(),
  name: 'Moscow',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.0762563005163317',
    description: '[photo description]'
  }]
}, {
  description: generateDescription(),
  name: 'Paris',
  pictures: [{
    src: 'http://picsum.photos/300/200?r=0.0762563005163317',
    description: '[photo description]'
  }]
}];
const OFFER_TITLES = [// taxi
'Upgrade to a business class', 'Choose the radio station', 'Choose temperature', 'Drive quickly, I\'m in a hurry', 'Drive slowly', // bus
'Infotainment system', 'Order meal', 'Choose seats', // restaurant
'Choose live music', 'Choose VIP area', // train
'Book a taxi at the arrival point', 'Order a breakfast', 'Wake up at a certain time'];

const getRandomArrayItem = items => items[(0,_random_js__WEBPACK_IMPORTED_MODULE_0__.getRandomIntInclusive)(0, items.length - 1)];

const generatePoorId = () => +String(Math.random()).slice(-5);

const generateOffer = ({
  id = generatePoorId(),
  title = getRandomArrayItem(OFFER_TITLES),
  price = (0,_random_js__WEBPACK_IMPORTED_MODULE_0__.getRandomIntInclusive)(0, 100)
} = {}) => ({
  id,
  title,
  price
});

const pointTypeToOffers = _const_js__WEBPACK_IMPORTED_MODULE_1__.POINT_TYPES.reduce((map, type) => {
  map[type] = [];
  return map;
}, {});
pointTypeToOffers['taxi'] = [...Array.from({
  length: 2
}, generateOffer), generateOffer({
  title: 'Wi-Fi',
  price: 100
})];
const offers = [{
  type: 'taxi',
  offers: [{
    'id': 1,
    'title': 'Upgrade to a business class',
    'price': 120
  }, {
    'id': 2,
    'title': 'Choose the radio station',
    'price': 60
  }]
}, {
  type: 'bus',
  offers: [{
    'id': 3,
    'title': 'Upgrade to a business class',
    'price': 100
  }, {
    'id': 4,
    'title': 'Choose the radio station',
    'price': 10
  }]
}, {
  type: 'ship',
  offers: [{
    'id': 5,
    'title': 'Add meal',
    'price': 20
  }, {
    'id': 6,
    'title': 'Choose seats',
    'price': 15
  }, {
    'id': 7,
    'title': 'Upgrade to a business class',
    'price': 100
  }]
}, {
  type: 'drive',
  offers: [{
    'id': 8,
    'title': 'Add meal',
    'price': 20
  }, {
    'id': 9,
    'title': 'Choose seats',
    'price': 15
  }, {
    'id': 10,
    'title': 'Upgrade to a business class',
    'price': 100
  }]
}, {
  type: 'train',
  offers: [{
    'id': 11,
    'title': 'Add meal',
    'price': 20
  }, {
    'id': 12,
    'title': 'Choose seats',
    'price': 15
  }, {
    'id': 13,
    'title': 'Upgrade to a business class',
    'price': 100
  }]
}, {
  type: 'check-in',
  offers: [{
    'id': 14,
    'title': 'Add meal',
    'price': 20
  }, {
    'id': 15,
    'title': 'Choose seats',
    'price': 15
  }, {
    'id': 16,
    'title': 'Upgrade to a business class',
    'price': 100
  }]
}, {
  type: 'sightseeing',
  offers: [{
    'id': 17,
    'title': 'Add meal',
    'price': 20
  }, {
    'id': 18,
    'title': 'Choose seats',
    'price': 15
  }, {
    'id': 19,
    'title': 'Upgrade to a business class',
    'price': 100
  }]
}, {
  type: 'restaurant',
  offers: [{
    'id': 20,
    'title': 'Leave a tip',
    'price': 20
  }, {
    'id': 21,
    'title': 'Choose seats',
    'price': 15
  }, {
    'id': 22,
    'title': 'Upgrade to a business class',
    'price': 100
  }]
}];

const generatePoint = ({
  id = '0',
  basePrice = (0,_random_js__WEBPACK_IMPORTED_MODULE_0__.getRandomIntInclusive)(0, 100),
  type = getRandomType(),
  destination = destinations[0],
  startDate = new Date(),
  finishDate = new Date(),
  offers = [],
  isFavorite = getIsFavourite()
} = {}) => {
  return {
    id: (0,nanoid__WEBPACK_IMPORTED_MODULE_2__.nanoid)(),
    type,
    destination,
    isFavorite,
    basePrice,
    startDate,
    finishDate,
    offers: [{
      'id': 1,
      'title': 'Upgrade to a business class',
      'price': 120
    }]
  };
};

const points = [generatePoint({
  type: 'taxi',
  destination: destinations[0],
  startDate: new Date('2021-11-29T22:55:56.845Z'),
  finishDate: new Date('2021-11-31T22:55:56.845Z'),
  basePrice: 50,
  offers: offers.find(offer => offer.type = 'taxi').offers
}), generatePoint({
  type: 'taxi',
  destination: destinations[1],
  startDate: new Date('2021-12-01T10:00:56.845Z'),
  finishDate: new Date('2021-12-01T12:00:56.845Z'),
  basePrice: 1000,
  offers: offers.find(offer => offer.type = 'taxi').offers
}), generatePoint({
  type: 'bus',
  destination: destinations[2],
  basePrice: 500,
  startDate: new Date('2021-10-01T16:00:56.845Z'),
  finishDate: new Date('2021-10-03T12:00:56.845Z')
})];


/***/ }),

/***/ "./src/mock/random.js":
/*!****************************!*\
  !*** ./src/mock/random.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomIntInclusive": () => (/* binding */ getRandomIntInclusive)
/* harmony export */ });
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



/***/ }),

/***/ "./src/presenter/info-cost-presenter.js":
/*!**********************************************!*\
  !*** ./src/presenter/info-cost-presenter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InfoCostPresenter)
/* harmony export */ });
/* harmony import */ var _view_trip_cost_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/trip-cost-view.js */ "./src/view/trip-cost-view.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_trip_cost_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/trip-cost.js */ "./src/utils/trip-cost.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





var _container = /*#__PURE__*/new WeakMap();

var _tripCostComponent = /*#__PURE__*/new WeakMap();

class InfoCostPresenter {
  constructor(container) {
    _classPrivateFieldInitSpec(this, _container, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _tripCostComponent, {
      writable: true,
      value: null
    });

    _defineProperty(this, "init", points => {
      const totalPrice = (0,_utils_trip_cost_js__WEBPACK_IMPORTED_MODULE_2__.calcTotalPrice)(points);

      const prevTripCostComponent = _classPrivateFieldGet(this, _tripCostComponent);

      _classPrivateFieldSet(this, _tripCostComponent, new _view_trip_cost_view_js__WEBPACK_IMPORTED_MODULE_0__["default"](totalPrice));

      if (prevTripCostComponent === null) {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(_classPrivateFieldGet(this, _container), _classPrivateFieldGet(this, _tripCostComponent), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.BEFORE_END);
        return;
      }

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.replace)(_classPrivateFieldGet(this, _tripCostComponent), prevTripCostComponent);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.remove)(prevTripCostComponent);
    });

    _classPrivateFieldSet(this, _container, container);
  }

}

/***/ }),

/***/ "./src/presenter/main-info-presenter.js":
/*!**********************************************!*\
  !*** ./src/presenter/main-info-presenter.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainInfoPresenter)
/* harmony export */ });
/* harmony import */ var _view_trip_main_info_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/trip-main-info-view.js */ "./src/view/trip-main-info-view.js");
/* harmony import */ var _view_trip_title_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/trip-title-view.js */ "./src/view/trip-title-view.js");
/* harmony import */ var _view_trip_dates_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/trip-dates-view.js */ "./src/view/trip-dates-view.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }







const calcTripDates = points => {
  const uniqueNames = new Set();
  points.forEach(({
    destination
  }) => {
    uniqueNames.add(destination.name);
  });
  return {
    dateBegin: (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_4__.getFirstItem)(points).startDate,
    dateEnd: (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_4__.getLastItem)(points).finishDate
  };
};

var _container = /*#__PURE__*/new WeakMap();

var _mainInfoComponent = /*#__PURE__*/new WeakMap();

class MainInfoPresenter {
  constructor(container) {
    _classPrivateFieldInitSpec(this, _container, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _mainInfoComponent, {
      writable: true,
      value: null
    });

    _defineProperty(this, "init", points => {
      const uniqueNames = points.map(({
        destination
      }) => destination.name);
      const tripDates = calcTripDates(points);

      const prevMainInfoComponent = _classPrivateFieldGet(this, _mainInfoComponent);

      _classPrivateFieldSet(this, _mainInfoComponent, new _view_trip_main_info_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]());

      const tripTitleComponent = new _view_trip_title_view_js__WEBPACK_IMPORTED_MODULE_1__["default"](uniqueNames);
      const tripDatesComponent = new _view_trip_dates_view_js__WEBPACK_IMPORTED_MODULE_2__["default"](tripDates);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _mainInfoComponent), tripTitleComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.AFTER_BEGIN);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _mainInfoComponent), tripDatesComponent, _utils_render_js__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.BEFORE_END);

      if (prevMainInfoComponent === null) {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)(_classPrivateFieldGet(this, _container), _classPrivateFieldGet(this, _mainInfoComponent), _utils_render_js__WEBPACK_IMPORTED_MODULE_3__.RenderPosition.AFTER_BEGIN);
        return;
      }

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.replace)(_classPrivateFieldGet(this, _mainInfoComponent), prevMainInfoComponent);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.remove)(prevMainInfoComponent);
    });

    _classPrivateFieldSet(this, _container, container);
  }

}

/***/ }),

/***/ "./src/presenter/point-presenter.js":
/*!******************************************!*\
  !*** ./src/presenter/point-presenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointPresenter)
/* harmony export */ });
/* harmony import */ var _view_point_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/point-view.js */ "./src/view/point-view.js");
/* harmony import */ var _view_edit_point_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/edit-point-view.js */ "./src/view/edit-point-view.js");
/* harmony import */ var _view_edit_point_view_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_view_edit_point_view_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING'
};

var _pointListContainer = /*#__PURE__*/new WeakMap();

var _pointComponent = /*#__PURE__*/new WeakMap();

var _editPointComponent = /*#__PURE__*/new WeakMap();

var _changeData = /*#__PURE__*/new WeakMap();

var _changeMode = /*#__PURE__*/new WeakMap();

var _point = /*#__PURE__*/new WeakMap();

var _destinations = /*#__PURE__*/new WeakMap();

var _offers = /*#__PURE__*/new WeakMap();

var _mode = /*#__PURE__*/new WeakMap();

var _replacePointToForm = /*#__PURE__*/new WeakMap();

var _replaceFormToPoint = /*#__PURE__*/new WeakMap();

var _handleEditClick = /*#__PURE__*/new WeakMap();

var _handleFavoriteClick = /*#__PURE__*/new WeakMap();

var _handleFormSubmit = /*#__PURE__*/new WeakMap();

var _handleEditReClick = /*#__PURE__*/new WeakMap();

var _onEscKeyDown = /*#__PURE__*/new WeakMap();

class PointPresenter {
  constructor(pointListContainer, changeData, changeMode) {
    _classPrivateFieldInitSpec(this, _pointListContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _pointComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _editPointComponent, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeData, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _changeMode, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _destinations, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _offers, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _mode, {
      writable: true,
      value: Mode.DEFAULT
    });

    _defineProperty(this, "init", (point, destinations, offers) => {
      _classPrivateFieldSet(this, _point, point);

      _classPrivateFieldSet(this, _destinations, destinations);

      _classPrivateFieldSet(this, _offers, offers);

      const prevPointComponent = _classPrivateFieldGet(this, _pointComponent);

      const prevEditPointComponent = _classPrivateFieldGet(this, _editPointComponent);

      _classPrivateFieldSet(this, _pointComponent, new _view_point_view_js__WEBPACK_IMPORTED_MODULE_0__["default"](point));

      _classPrivateFieldSet(this, _editPointComponent, new (_view_edit_point_view_js__WEBPACK_IMPORTED_MODULE_1___default())(point, destinations, offers));

      _classPrivateFieldGet(this, _pointComponent).setRollupButtonClickHandler(_classPrivateFieldGet(this, _handleEditClick));

      _classPrivateFieldGet(this, _editPointComponent).setSaveHandler(_classPrivateFieldGet(this, _handleFormSubmit));

      _classPrivateFieldGet(this, _editPointComponent).setRollupButtonClickHandler(_classPrivateFieldGet(this, _handleEditReClick));

      _classPrivateFieldGet(this, _pointComponent).setFavoriteClickHandler(_classPrivateFieldGet(this, _handleFavoriteClick));

      if (prevPointComponent === null || prevEditPointComponent === null) {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.render)(_classPrivateFieldGet(this, _pointListContainer), _classPrivateFieldGet(this, _pointComponent), _utils_render_js__WEBPACK_IMPORTED_MODULE_2__.RenderPosition.BEFORE_END);
        return;
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.DEFAULT) {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointComponent), prevPointComponent);
      }

      if (_classPrivateFieldGet(this, _mode) === Mode.EDITING) {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _editPointComponent), prevEditPointComponent);
      }

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(prevPointComponent);
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(prevEditPointComponent);
    });

    _defineProperty(this, "destroy", () => {
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(_classPrivateFieldGet(this, _pointComponent));
      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.remove)(_classPrivateFieldGet(this, _editPointComponent));
    });

    _defineProperty(this, "resetView", () => {
      if (_classPrivateFieldGet(this, _mode) !== Mode.DEFAULT) {
        _classPrivateFieldGet(this, _editPointComponent).reset(_classPrivateFieldGet(this, _point));

        _classPrivateFieldGet(this, _replaceFormToPoint).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _replacePointToForm, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _changeMode).call(this);

        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _editPointComponent), _classPrivateFieldGet(this, _pointComponent));
        document.addEventListener('keydown', _classPrivateFieldGet(this, _onEscKeyDown));

        _classPrivateFieldSet(this, _mode, Mode.EDITING);
      }
    });

    _classPrivateFieldInitSpec(this, _replaceFormToPoint, {
      writable: true,
      value: () => {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__.replace)(_classPrivateFieldGet(this, _pointComponent), _classPrivateFieldGet(this, _editPointComponent));
        document.removeEventListener('keydown', _classPrivateFieldGet(this, _onEscKeyDown));

        _classPrivateFieldSet(this, _mode, Mode.DEFAULT);
      }
    });

    _classPrivateFieldInitSpec(this, _handleEditClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _replacePointToForm).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _handleFavoriteClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _changeData).call(this, { ..._classPrivateFieldGet(this, _point),
          isFavorite: !_classPrivateFieldGet(this, _point).isFavorite
        });
      }
    });

    _classPrivateFieldInitSpec(this, _handleFormSubmit, {
      writable: true,
      value: point => {
        _classPrivateFieldGet(this, _changeData).call(this, point);

        _classPrivateFieldGet(this, _replaceFormToPoint).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _handleEditReClick, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _replaceFormToPoint).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _onEscKeyDown, {
      writable: true,
      value: evt => {
        if ((0,_utils_common_js__WEBPACK_IMPORTED_MODULE_3__.isEscapeEvent)(evt)) {
          evt.preventDefault();

          _classPrivateFieldGet(this, _editPointComponent).reset(_classPrivateFieldGet(this, _point));

          _classPrivateFieldGet(this, _replaceFormToPoint).call(this);
        }
      }
    });

    _classPrivateFieldSet(this, _pointListContainer, pointListContainer);

    _classPrivateFieldSet(this, _changeData, changeData);

    _classPrivateFieldSet(this, _changeMode, changeMode);
  }

}

/***/ }),

/***/ "./src/presenter/trip-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/trip-presenter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripPresenter)
/* harmony export */ });
/* harmony import */ var _view_menu_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/menu-view.js */ "./src/view/menu-view.js");
/* harmony import */ var _view_filters_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/filters-view.js */ "./src/view/filters-view.js");
/* harmony import */ var _view_sort_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/sort-view.js */ "./src/view/sort-view.js");
/* harmony import */ var _view_point_list_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/point-list-view.js */ "./src/view/point-list-view.js");
/* harmony import */ var _view_no_point_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/no-point-view.js */ "./src/view/no-point-view.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _point_presenter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./point-presenter.js */ "./src/presenter/point-presenter.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }











var _tripContainer = /*#__PURE__*/new WeakMap();

var _menuContainer = /*#__PURE__*/new WeakMap();

var _filtersContainer = /*#__PURE__*/new WeakMap();

var _menuComponent = /*#__PURE__*/new WeakMap();

var _filtersComponent = /*#__PURE__*/new WeakMap();

var _sortComponent = /*#__PURE__*/new WeakMap();

var _pointListComponent = /*#__PURE__*/new WeakMap();

var _noPointComponent = /*#__PURE__*/new WeakMap();

var _points = /*#__PURE__*/new WeakMap();

var _destinations = /*#__PURE__*/new WeakMap();

var _offers = /*#__PURE__*/new WeakMap();

var _pointPresenter = /*#__PURE__*/new WeakMap();

var _currentSortType = /*#__PURE__*/new WeakMap();

var _sourcedPoints = /*#__PURE__*/new WeakMap();

var _handlePointChange = /*#__PURE__*/new WeakMap();

var _handleModeChange = /*#__PURE__*/new WeakMap();

var _renderMenu = /*#__PURE__*/new WeakMap();

var _renderFilters = /*#__PURE__*/new WeakMap();

var _sortPoints = /*#__PURE__*/new WeakMap();

var _handleSortTypeChange = /*#__PURE__*/new WeakMap();

var _renderSort = /*#__PURE__*/new WeakMap();

var _renderPointList = /*#__PURE__*/new WeakMap();

var _renderPoint = /*#__PURE__*/new WeakMap();

var _clearPointList = /*#__PURE__*/new WeakMap();

var _renderPoints = /*#__PURE__*/new WeakMap();

var _renderNoPoints = /*#__PURE__*/new WeakMap();

var _renderTrip = /*#__PURE__*/new WeakMap();

class TripPresenter {
  constructor(tripContainer, menuContainer, filtersContainer) {
    _classPrivateFieldInitSpec(this, _tripContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _menuContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _filtersContainer, {
      writable: true,
      value: null
    });

    _classPrivateFieldInitSpec(this, _menuComponent, {
      writable: true,
      value: new _view_menu_view_js__WEBPACK_IMPORTED_MODULE_0__["default"]()
    });

    _classPrivateFieldInitSpec(this, _filtersComponent, {
      writable: true,
      value: new _view_filters_view_js__WEBPACK_IMPORTED_MODULE_1__["default"]()
    });

    _classPrivateFieldInitSpec(this, _sortComponent, {
      writable: true,
      value: new _view_sort_view_js__WEBPACK_IMPORTED_MODULE_2__["default"]()
    });

    _classPrivateFieldInitSpec(this, _pointListComponent, {
      writable: true,
      value: new _view_point_list_view_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
    });

    _classPrivateFieldInitSpec(this, _noPointComponent, {
      writable: true,
      value: new _view_no_point_view_js__WEBPACK_IMPORTED_MODULE_4__["default"]()
    });

    _classPrivateFieldInitSpec(this, _points, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _destinations, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _offers, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _pointPresenter, {
      writable: true,
      value: new Map()
    });

    _classPrivateFieldInitSpec(this, _currentSortType, {
      writable: true,
      value: _const_js__WEBPACK_IMPORTED_MODULE_8__.SortType.DEFAULT
    });

    _classPrivateFieldInitSpec(this, _sourcedPoints, {
      writable: true,
      value: []
    });

    _defineProperty(this, "init", (points, destinations, offers) => {
      _classPrivateFieldSet(this, _points, [...points].sort(_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.sortPointByDay));

      _classPrivateFieldSet(this, _sourcedPoints, [...points]);

      _classPrivateFieldSet(this, _destinations, destinations);

      _classPrivateFieldSet(this, _offers, offers);

      _classPrivateFieldGet(this, _renderTrip).call(this);

      (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(_classPrivateFieldGet(this, _tripContainer), _classPrivateFieldGet(this, _pointListComponent), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderPosition.BEFORE_END);
    });

    _classPrivateFieldInitSpec(this, _handlePointChange, {
      writable: true,
      value: updatedPoint => {
        _classPrivateFieldSet(this, _points, (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.updateItemById)(_classPrivateFieldGet(this, _points), updatedPoint));

        _classPrivateFieldSet(this, _sourcedPoints, (0,_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.updateItemById)(_classPrivateFieldGet(this, _sourcedPoints), updatedPoint));

        _classPrivateFieldGet(this, _pointPresenter).get(updatedPoint.id).init(updatedPoint, _classPrivateFieldGet(this, _destinations), _classPrivateFieldGet(this, _offers));
      }
    });

    _classPrivateFieldInitSpec(this, _handleModeChange, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(presenter => presenter.resetView());
      }
    });

    _classPrivateFieldInitSpec(this, _renderMenu, {
      writable: true,
      value: () => {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(_classPrivateFieldGet(this, _menuContainer), _classPrivateFieldGet(this, _menuComponent), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderPosition.AFTER_BEGIN);
      }
    });

    _classPrivateFieldInitSpec(this, _renderFilters, {
      writable: true,
      value: () => {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(_classPrivateFieldGet(this, _filtersContainer), _classPrivateFieldGet(this, _filtersComponent), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderPosition.AFTER_BEGIN);
      }
    });

    _classPrivateFieldInitSpec(this, _sortPoints, {
      writable: true,
      value: sortType => {
        switch (sortType) {
          case _const_js__WEBPACK_IMPORTED_MODULE_8__.SortType.PRICE:
            _classPrivateFieldGet(this, _points).sort(_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.sortPointByPrice);

            break;

          case _const_js__WEBPACK_IMPORTED_MODULE_8__.SortType.TIME:
            _classPrivateFieldGet(this, _points).sort(_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.sortPointByTime);

            break;

          case _const_js__WEBPACK_IMPORTED_MODULE_8__.SortType.DAY:
            _classPrivateFieldGet(this, _points).sort(_utils_common_js__WEBPACK_IMPORTED_MODULE_7__.sortPointByDay);

            break;

          default:
            _classPrivateFieldSet(this, _points, [..._classPrivateFieldGet(this, _sourcedPoints)]);

        }

        _classPrivateFieldSet(this, _currentSortType, sortType);
      }
    });

    _classPrivateFieldInitSpec(this, _handleSortTypeChange, {
      writable: true,
      value: sortType => {
        if (_classPrivateFieldGet(this, _currentSortType) === sortType) {
          return;
        }

        _classPrivateFieldGet(this, _sortPoints).call(this, sortType);

        _classPrivateFieldGet(this, _clearPointList).call(this);

        _classPrivateFieldGet(this, _renderPointList).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _renderSort, {
      writable: true,
      value: () => {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(_classPrivateFieldGet(this, _tripContainer), _classPrivateFieldGet(this, _sortComponent), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderPosition.AFTER_BEGIN);

        _classPrivateFieldGet(this, _sortComponent).setChangeHandler(_classPrivateFieldGet(this, _handleSortTypeChange));
      }
    });

    _classPrivateFieldInitSpec(this, _renderPointList, {
      writable: true,
      value: () => {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(_classPrivateFieldGet(this, _tripContainer), _classPrivateFieldGet(this, _pointListComponent), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderPosition.BEFORE_END);

        _classPrivateFieldGet(this, _renderPoints).call(this);
      }
    });

    _classPrivateFieldInitSpec(this, _renderPoint, {
      writable: true,
      value: point => {
        const pointPresenter = new _point_presenter_js__WEBPACK_IMPORTED_MODULE_6__["default"](_classPrivateFieldGet(this, _pointListComponent), _classPrivateFieldGet(this, _handlePointChange), _classPrivateFieldGet(this, _handleModeChange));
        pointPresenter.init(point, _classPrivateFieldGet(this, _destinations), _classPrivateFieldGet(this, _offers));

        _classPrivateFieldGet(this, _pointPresenter).set(point.id, pointPresenter);
      }
    });

    _classPrivateFieldInitSpec(this, _clearPointList, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _pointPresenter).forEach(presenter => presenter.destroy());

        _classPrivateFieldGet(this, _pointPresenter).clear();
      }
    });

    _classPrivateFieldInitSpec(this, _renderPoints, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _points).forEach(point => {
          _classPrivateFieldGet(this, _renderPoint).call(this, point);
        });
      }
    });

    _classPrivateFieldInitSpec(this, _renderNoPoints, {
      writable: true,
      value: () => {
        (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)(_classPrivateFieldGet(this, _pointListComponent), _classPrivateFieldGet(this, _noPointComponent), _utils_render_js__WEBPACK_IMPORTED_MODULE_5__.RenderPosition.BEFORE_END);
      }
    });

    _classPrivateFieldInitSpec(this, _renderTrip, {
      writable: true,
      value: () => {
        _classPrivateFieldGet(this, _renderMenu).call(this);

        _classPrivateFieldGet(this, _renderFilters).call(this);

        _classPrivateFieldGet(this, _renderSort).call(this);

        if (_classPrivateFieldGet(this, _points).length === 0) {
          _classPrivateFieldGet(this, _renderNoPoints).call(this);

          return;
        }

        _classPrivateFieldGet(this, _renderPointList).call(this);
      }
    });

    _classPrivateFieldSet(this, _tripContainer, tripContainer);

    _classPrivateFieldSet(this, _menuContainer, menuContainer);

    _classPrivateFieldSet(this, _filtersContainer, filtersContainer);
  }

}

/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   "isEscapeEvent": () => (/* binding */ isEscapeEvent),
/* harmony export */   "updateItemById": () => (/* binding */ updateItemById),
/* harmony export */   "sortPointByPrice": () => (/* binding */ sortPointByPrice),
/* harmony export */   "sortPointByTime": () => (/* binding */ sortPointByTime),
/* harmony export */   "sortPointByDay": () => (/* binding */ sortPointByDay),
/* harmony export */   "transformDate": () => (/* binding */ transformDate),
/* harmony export */   "getFirstItem": () => (/* binding */ getFirstItem),
/* harmony export */   "getLastItem": () => (/* binding */ getLastItem),
/* harmony export */   "calcDatesDiff": () => (/* binding */ calcDatesDiff)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const ESCAPE_KEYS = ['Escape', 'Esc'];
const capitalizeFirstLetter = text => text.charAt(0).toUpperCase() + text.slice(1);
const isEscapeEvent = evt => ESCAPE_KEYS.includes(evt.key);
const updateItemById = (items, update) => {
  const index = items.findIndex(item => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [...items.slice(0, index), update, ...items.slice(index + 1)];
};
const sortPointByPrice = (point1, point2) => point1.basePrice - point2.basePrice;
const sortPointByTime = (point1, point2) => point2.finishDate - point2.startDate - (point1.finishDate - point1.startDate);
const sortPointByDay = (point1, point2) => point1.startDate - point2.startDate;
const transformDate = (date, format) => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
const getFirstItem = items => items[0];
const getLastItem = items => items[items.length - 1];

const addZero = number => {
  if (number < 10) {
    return `0${number}`;
  }

  return number;
};

const calcDatesDiff = (timeStart, timeEnd) => {
  const minutesDuration = timeEnd.diff(timeStart, 'minutes') % 60 > 0 ? `${addZero(timeEnd.diff(timeStart, 'minutes') % 60)}M` : '';
  const hoursDuration = timeEnd.diff(timeStart, 'hours') % 24 > 0 ? `${addZero(timeEnd.diff(timeStart, 'hours') % 24)}H ` : '';
  const daysDuration = timeEnd.diff(timeStart, 'days') > 0 ? `${addZero(timeEnd.diff(timeStart, 'days'))}D ` : '';
  return daysDuration + hoursDuration + minutesDuration;
};

/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "remove": () => (/* binding */ remove)
/* harmony export */ });
/* harmony import */ var _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract-view.js */ "./src/view/abstract-view.js");

const RenderPosition = {
  BEFORE_BEGIN: 'beforebegin',
  AFTER_BEGIN: 'afterbegin',
  BEFORE_END: 'beforeend',
  AFTER_END: 'afterend'
};
const render = (container, element, place) => {
  const parent = container instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? container.element : container;
  const child = element instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? element.element : element;

  switch (place) {
    case RenderPosition.BEFORE_BEGIN:
      parent.before(child);
      break;

    case RenderPosition.AFTER_BEGIN:
      parent.prepend(child);
      break;

    case RenderPosition.BEFORE_END:
      parent.append(child);
      break;

    case RenderPosition.AFTER_END:
      parent.after(child);
      break;
  }
};
const createElement = template => {
  const wrap = document.createElement('div');
  wrap.innerHTML = template;
  return wrap.firstElementChild;
};
const replace = (newComponent, oldComponent) => {
  if (newComponent === null || oldComponent === null) {
    throw new Error('Can\'t replace unexisting elements');
  }

  const newChild = newComponent instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? newComponent.element : newComponent;
  const oldChild = oldComponent instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] ? oldComponent.element : oldComponent;
  const parent = oldChild.parentElement;

  if (parent === null) {
    throw new Error('Parent element doesn\'t exist');
  }

  parent.replaceChild(newChild, oldChild);
};
const remove = component => {
  if (component === null) {
    return;
  }

  if (!(component instanceof _view_abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    throw new Error('Can remove only components');
  }

  component.element.remove();
  component.removeElement();
};

/***/ }),

/***/ "./src/utils/trip-cost.js":
/*!********************************!*\
  !*** ./src/utils/trip-cost.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcTotalPrice": () => (/* binding */ calcTotalPrice)
/* harmony export */ });
const reducePointOffers = (totalPrice, {
  price
}) => totalPrice + price;

const reducePointsPrice = (totalPrice, {
  basePrice,
  offers
}) => offers.length > 0 ? offers.reduce(reducePointOffers, totalPrice + basePrice) : totalPrice + basePrice;

const calcTotalPrice = points => points.reduce(reducePointsPrice, 0);



/***/ }),

/***/ "./src/view/abstract-view.js":
/*!***********************************!*\
  !*** ./src/view/abstract-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AbstractView)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }



var _element = /*#__PURE__*/new WeakMap();

class AbstractView {
  constructor() {
    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: null
    });

    _defineProperty(this, "_callback", {});

    if (new.target === AbstractView) {
      throw new Error('Can\'t instantiate AbstractView, only concrete one.');
    }
  }

  get element() {
    if (_classPrivateFieldGet(this, _element) === null) {
      _classPrivateFieldSet(this, _element, (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.template));
    }

    return _classPrivateFieldGet(this, _element);
  }

  get template() {
    throw new Error('Abstract method not implemented: get template');
  }

  removeElement() {
    _classPrivateFieldSet(this, _element, null);
  }

}

/***/ }),

/***/ "./src/view/edit-point-view.js":
/*!*************************************!*\
  !*** ./src/view/edit-point-view.js ***!
  \*************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/lena/1545469-big-trip-16/src/view/edit-point-view.js: Private name #datepickerFrom is not defined. (218:11)\n\n\u001b[0m \u001b[90m 216 |\u001b[39m   \u001b[33m#\u001b[39msetDatepickerFrom \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 217 |\u001b[39m     \u001b[36mif\u001b[39m (\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m_data\u001b[33m.\u001b[39mstartDate) {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 218 |\u001b[39m       \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m\u001b[33m#\u001b[39mdatepickerFrom \u001b[33m=\u001b[39m flatpickr(\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 219 |\u001b[39m         \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39melement\u001b[33m.\u001b[39mquerySelector(\u001b[32m'#event-start-time-1'\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 220 |\u001b[39m         {\u001b[0m\n\u001b[0m \u001b[90m 221 |\u001b[39m           dateFormat\u001b[33m:\u001b[39m \u001b[32m'd/m/Y H:i'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    at Parser._raise (/home/lena/1545469-big-trip-16/node_modules/@babel/parser/lib/index.js:541:17)\n    at Parser.raiseWithData (/home/lena/1545469-big-trip-16/node_modules/@babel/parser/lib/index.js:534:17)\n    at Parser.raise (/home/lena/1545469-big-trip-16/node_modules/@babel/parser/lib/index.js:495:17)\n    at ClassScopeHandler.exit (/home/lena/1545469-big-trip-16/node_modules/@babel/parser/lib/index.js:3262:14)\n    at Parser.parseClassBody (/home/lena/1545469-big-trip-16/node_modules/@babel/parser/lib/index.js:14173:21)\n    at Parser.parseClass (/home/lena/1545469-big-trip-16/node_modules/@babel/parser/lib/index.js:14110:22)\n    at Parser.parseExportDefaultExpression (/home/lena/1545469-big-trip-16/node_modules/@babel/parser/lib/index.js:14576:19)\n    at Parser.parseExport (/home/lena/1545469-big-trip-16/node_modules/@babel/parser/lib/index.js:14486:31)\n    at Parser.parseStatementContent (/home/lena/1545469-big-trip-16/node_modules/@babel/parser/lib/index.js:13460:27)\n    at Parser.parseStatement (/home/lena/1545469-big-trip-16/node_modules/@babel/parser/lib/index.js:13352:17)");

/***/ }),

/***/ "./src/view/filters-view.js":
/*!**********************************!*\
  !*** ./src/view/filters-view.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FiltersView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createFilterTemplate = (name, title, isChecked = false) => `<div class="trip-filters__filter">
    <input
      id="filter-${name}"
      class="trip-filters__filter-input visually-hidden"
      type="radio"
      name="trip-filter"
      value="${name}"
      ${isChecked ? 'checked' : ''}
    >
    <label class="trip-filters__filter-label" for="filter-${name}">${title}</label>
  </div>`;

const createFiltersTemplate = () => `<form class="trip-filters" action="#" method="get">
    ${createFilterTemplate('everything', 'Everything', true)}
    ${createFilterTemplate('future', 'Future')}
    ${createFilterTemplate('past', 'Past')}
    <button class="visually-hidden" type="submit">Accept filter</button>
   </form>`;

class FiltersView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createFiltersTemplate();
  }

}

/***/ }),

/***/ "./src/view/menu-view.js":
/*!*******************************!*\
  !*** ./src/view/menu-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createMenuTemplate = () => `<nav class="trip-controls__trip-tabs  trip-tabs">
  <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
  <a class="trip-tabs__btn" href="#">Stats</a>
</nav>`;

class MenuView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createMenuTemplate();
  }

}

/***/ }),

/***/ "./src/view/no-point-view.js":
/*!***********************************!*\
  !*** ./src/view/no-point-view.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoPointView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createNoPointTemplate = () => '<p class="trip-events__msg">Click New Event to create your first point</p>'
/*
* Значение отображаемого текста зависит от выбранного фильтра:
* - Everthing – 'Click New Event to create your first point'
* - Past — 'There are no past events now';
* - Future — 'There are no future events now'.
*/
;

class NoPointView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createNoPointTemplate();
  }

}

/***/ }),

/***/ "./src/view/point-list-view.js":
/*!*************************************!*\
  !*** ./src/view/point-list-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointListView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createPointListTemplate = () => '<ul class="trip-events__list"></ul>';

class PointListView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createPointListTemplate();
  }

}

/***/ }),

/***/ "./src/view/point-view.js":
/*!********************************!*\
  !*** ./src/view/point-view.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointView)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }





const createOfferTemplate = ({
  title,
  price
}) => `<li class="event__offer">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
    </li>`;

const createPointTemplate = point => {
  const {
    type,
    startDate,
    finishDate,
    isFavorite,
    offers,
    basePrice,
    destination
  } = point;
  const startTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startDate);
  const endTime = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(finishDate);
  const favoriteClass = isFavorite ? 'event__favorite-btn--active' : '';
  const offersTemplate = offers.map(createOfferTemplate).join('');
  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${startTime.toISOString()}}">${startTime.format('MMM D')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${startTime.toISOString()}">${startTime.format('HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${endTime.toISOString()}">${endTime.format('HH:mm')}</time>
        </p>
        <p class="event__duration">${(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_2__.calcDatesDiff)(startTime, endTime)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offersTemplate}
      </ul>
      <button class="event__favorite-btn ${favoriteClass}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

var _point = /*#__PURE__*/new WeakMap();

var _onRollupButtonClick = /*#__PURE__*/new WeakMap();

var _onFavoriteButtonClick = /*#__PURE__*/new WeakMap();

class PointView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(point) {
    super();

    _classPrivateFieldInitSpec(this, _point, {
      writable: true,
      value: null
    });

    _defineProperty(this, "setRollupButtonClickHandler", callback => {
      this._callback.rollupButton = callback;
      this.element.querySelector('.event__rollup-btn').addEventListener('click', _classPrivateFieldGet(this, _onRollupButtonClick));
    });

    _defineProperty(this, "setFavoriteClickHandler", callback => {
      this._callback.clickOnFavorite = callback;
      this.element.querySelector('.event__favorite-btn').addEventListener('click', _classPrivateFieldGet(this, _onFavoriteButtonClick));
    });

    _classPrivateFieldInitSpec(this, _onRollupButtonClick, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.rollupButton();
      }
    });

    _classPrivateFieldInitSpec(this, _onFavoriteButtonClick, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.clickOnFavorite();
      }
    });

    _classPrivateFieldSet(this, _point, point);
  }

  get template() {
    return createPointTemplate(_classPrivateFieldGet(this, _point));
  }

}

/***/ }),

/***/ "./src/view/sort-view.js":
/*!*******************************!*\
  !*** ./src/view/sort-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SortView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const.js */ "./src/const.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }




const createSortTemplate = () => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            <div class="trip-sort__item  trip-sort__item--day">
              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.DAY}">
              <label class="trip-sort__btn" for="sort-day">Day</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--event">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--time">
              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.TIME}">
              <label class="trip-sort__btn" for="sort-time">Time</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--price">
              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type="${_const_js__WEBPACK_IMPORTED_MODULE_1__.SortType.PRICE}">
              <label class="trip-sort__btn" for="sort-price">Price</label>
            </div>

            <div class="trip-sort__item  trip-sort__item--offer">
              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
            </div>
          </form>`;

var _onChange = /*#__PURE__*/new WeakMap();

class SortView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "setChangeHandler", callback => {
      this._callback.changeSortType = callback;
      this.element.addEventListener('change', _classPrivateFieldGet(this, _onChange));
    });

    _classPrivateFieldInitSpec(this, _onChange, {
      writable: true,
      value: evt => {
        evt.preventDefault();

        this._callback.changeSortType(evt.target.dataset.sortType);
      }
    });
  }

  get template() {
    return createSortTemplate();
  }

}

/***/ }),

/***/ "./src/view/trip-cost-view.js":
/*!************************************!*\
  !*** ./src/view/trip-cost-view.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripCostView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



const createTripCostTemplate = totalPrice => `<p class="trip-info__cost">Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
  </p>`;

var _totalPrice = /*#__PURE__*/new WeakMap();

class TripCostView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(totalPrice) {
    super();

    _classPrivateFieldInitSpec(this, _totalPrice, {
      writable: true,
      value: 0
    });

    _classPrivateFieldSet(this, _totalPrice, totalPrice);
  }

  get template() {
    return createTripCostTemplate(_classPrivateFieldGet(this, _totalPrice));
  }

}

/***/ }),

/***/ "./src/view/trip-dates-view.js":
/*!*************************************!*\
  !*** ./src/view/trip-dates-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripDatesView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




const createTripDatesTemplate = ({
  dateBegin,
  dateEnd
}) => `<p class="trip-info__dates">${(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.transformDate)(dateBegin, 'DD MMM')}&nbsp;&mdash;&nbsp;${(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.transformDate)(dateEnd, 'DD MMM')}</p>`;

var _tripDates = /*#__PURE__*/new WeakMap();

class TripDatesView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(tripDates) {
    super();

    _classPrivateFieldInitSpec(this, _tripDates, {
      writable: true,
      value: null
    });

    _classPrivateFieldSet(this, _tripDates, tripDates);
  }

  get template() {
    return createTripDatesTemplate(_classPrivateFieldGet(this, _tripDates));
  }

}

/***/ }),

/***/ "./src/view/trip-main-info-view.js":
/*!*****************************************!*\
  !*** ./src/view/trip-main-info-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripMainInfoView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");


const createTripMainInfoTemplate = () => `<div class="trip-info__main">
  </div>`;

class TripMainInfoView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get template() {
    return createTripMainInfoTemplate();
  }

}

/***/ }),

/***/ "./src/view/trip-title-view.js":
/*!*************************************!*\
  !*** ./src/view/trip-title-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripTitleView)
/* harmony export */ });
/* harmony import */ var _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-view.js */ "./src/view/abstract-view.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



const MAX_CITIES_IN_TITLE = 3;

const createTripTitleTemplate = uniqueNames => `<h1 class="trip-info__title">
    ${uniqueNames.length > MAX_CITIES_IN_TITLE ? `${(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getFirstItem)(uniqueNames)} — ... — ${(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getLastItem)(uniqueNames)}` : `${(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getFirstItem)(uniqueNames)} — ${(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getLastItem)(uniqueNames)}`}
  </h1>`;

var _uniqueNames = /*#__PURE__*/new WeakMap();

class TripTitleView extends _abstract_view_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(uniqueNames) {
    super();

    _classPrivateFieldInitSpec(this, _uniqueNames, {
      writable: true,
      value: []
    });

    _classPrivateFieldSet(this, _uniqueNames, uniqueNames);
  }

  get template() {
    return createTripTitleTemplate(_classPrivateFieldGet(this, _uniqueNames));
  }

}

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/nanoid/index.dev.js":
/*!******************************************!*\
  !*** ./node_modules/nanoid/index.dev.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nanoid": () => (/* binding */ nanoid),
/* harmony export */   "customAlphabet": () => (/* binding */ customAlphabet),
/* harmony export */   "customRandom": () => (/* binding */ customRandom),
/* harmony export */   "urlAlphabet": () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet),
/* harmony export */   "random": () => (/* binding */ random)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");

if (true) {
  if (
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative' &&
    typeof crypto === 'undefined'
  ) {
    throw new Error(
      'React Native does not have a built-in secure random generator. ' +
        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +
        'For secure IDs, import `react-native-get-random-values` ' +
        'before Nano ID.'
    )
  }
  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {
    throw new Error(
      'Import file with `if (!window.crypto) window.crypto = window.msCrypto`' +
        ' before importing Nano ID to fix IE 11 support'
    )
  }
  if (typeof crypto === 'undefined') {
    throw new Error(
      'Your browser does not have secure random generator. ' +
        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'
    )
  }
}
let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, size, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * size) / alphabet.length)
  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "urlAlphabet": () => (/* binding */ urlAlphabet)
/* harmony export */ });
let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _presenter_trip_presenter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/trip-presenter.js */ "./src/presenter/trip-presenter.js");
/* harmony import */ var _presenter_main_info_presenter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/main-info-presenter.js */ "./src/presenter/main-info-presenter.js");
/* harmony import */ var _presenter_info_cost_presenter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./presenter/info-cost-presenter.js */ "./src/presenter/info-cost-presenter.js");




const contentContainer = document.querySelector('.trip-events');
const tripMainContainer = document.querySelector('.trip-main');
const tripMainInfo = tripMainContainer.querySelector('.trip-main__trip-info');
const menuContainer = document.querySelector('.trip-controls__navigation');
const filtersContainer = document.querySelector('.trip-controls__filters');
const tripMainInfoPresenter = new _presenter_main_info_presenter_js__WEBPACK_IMPORTED_MODULE_2__["default"](tripMainInfo);
tripMainInfoPresenter.init(_mock_point_js__WEBPACK_IMPORTED_MODULE_0__.points);
const infoCostPresenter = new _presenter_info_cost_presenter_js__WEBPACK_IMPORTED_MODULE_3__["default"](tripMainInfo);
infoCostPresenter.init(_mock_point_js__WEBPACK_IMPORTED_MODULE_0__.points);
const tripPresenter = new _presenter_trip_presenter_js__WEBPACK_IMPORTED_MODULE_1__["default"](contentContainer, menuContainer, filtersContainer);
tripPresenter.init(_mock_point_js__WEBPACK_IMPORTED_MODULE_0__.points, _mock_point_js__WEBPACK_IMPORTED_MODULE_0__.destinations, _mock_point_js__WEBPACK_IMPORTED_MODULE_0__.offers);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map