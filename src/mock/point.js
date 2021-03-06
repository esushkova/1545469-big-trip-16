import {nanoid} from 'nanoid';
import { getRandomIntInclusive } from './random.js';
import { POINT_TYPES } from '../const.js';

const POINT_CITIES = [
  'Amsterdam',
  'Chamonix',
  'Paris',
  'Moscow',
];

const getRandomItemArray = (items) => POINT_TYPES[getRandomIntInclusive(0, items.length - 1)];

const getRandomType = () => getRandomItemArray(POINT_TYPES);

const getIsFavourite = () => Boolean(getRandomIntInclusive(0, 1));

const generateDescription = () => {
  const description = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Cras aliquet varius magna, non porta ligula feugiat eget.',
    'Fusce tristique felis at fermentum pharetra.',
    'Aliquam id orci ut lectus varius viverra.',
    'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
    'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
    'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
    'Sed sed nisi sed augue convallis suscipit in sed felis.',
    'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
    'In rutrum ac purus sit amet tempus.',
  ];

  const descriptionArray = [];
  const randomCount = getRandomIntInclusive(1, 5);

  for (let i = 1; i <= randomCount; i++) {
    const randomIndex = getRandomIntInclusive(0, description.length - 1);

    descriptionArray.push(description[randomIndex]);
  }

  return descriptionArray;
};

const destinations = [
  {
    description: generateDescription(),
    name: 'Rome',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: '[photo description]'
      },
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163318',
        description: '[photo description]'
      }
    ]
  },
  {
    description: generateDescription(),
    name: 'Moscow',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: '[photo description]'
      }
    ]
  },
  {
    description: generateDescription(),
    name: 'Paris',
    pictures: [
      {
        src: 'http://picsum.photos/300/200?r=0.0762563005163317',
        description: '[photo description]'
      }
    ]
  },
];

const OFFER_TITLES = [
  // taxi
  'Upgrade to a business class',
  'Choose the radio station',
  'Choose temperature',
  'Drive quickly, I\'m in a hurry',
  'Drive slowly',

  // bus
  'Infotainment system',
  'Order meal',
  'Choose seats',

  // restaurant
  'Choose live music',
  'Choose VIP area',

  // train
  'Book a taxi at the arrival point',
  'Order a breakfast',
  'Wake up at a certain time',
];

const getRandomArrayItem = (items) => items[getRandomIntInclusive(0, items.length - 1)];

const generatePoorId = () => +String(Math.random()).slice(-5);

const generateOffer = ({
  id = generatePoorId(),
  title = getRandomArrayItem(OFFER_TITLES),
  price = getRandomIntInclusive(0, 100),
} = {}) => ({
  id,
  title,
  price,
});

export const pointTypeToOffers = POINT_TYPES.reduce((map, type) => {
  map[type] = [];
  return map;
}, {});

pointTypeToOffers['taxi'] = [
  ...Array.from({ length: 2 }, generateOffer),
  generateOffer({
    title: 'Wi-Fi',
    price: 100,
  })
];

const offers = [
  {
    type: 'taxi',
    offers: [
      {
        'id': 1,
        'title': 'Upgrade to a business class',
        'price': 120
      }, {
        'id': 2,
        'title': 'Choose the radio station',
        'price': 60
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        'id': 3,
        'title': 'Upgrade to a business class',
        'price': 100
      }, {
        'id': 4,
        'title': 'Choose the radio station',
        'price': 10
      }
    ]
  },
  {
    type: 'ship',
    offers: [
      {
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
      }
    ]
  },

  {
    type: 'drive',
    offers: [
      {
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
      }
    ]
  },

  {
    type: 'train',
    offers: [
      {
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
      }
    ]
  },

  {
    type: 'check-in',
    offers: [
      {
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
      }
    ]
  },

  {
    type: 'sightseeing',
    offers: [
      {
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
      }
    ]
  },

  {
    type: 'restaurant',
    offers: [
      {
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
      }
    ]
  },
];

const generatePoint = ({
  id = '0',
  basePrice = getRandomIntInclusive(0, 100),
  type = getRandomType(),
  destination = destinations[0],
  startDate = new Date(),
  finishDate = new Date(),
  offers = [],
  isFavorite = getIsFavourite(),
} = {}) => {

  return {
    id: nanoid(),
    type,
    destination,
    isFavorite,
    basePrice,
    startDate,
    finishDate,
    offers: [
      {
        'id': 1,
        'title': 'Upgrade to a business class',
        'price': 120
      },
    ],
  };
};

const points = [
  generatePoint({
    type: 'taxi',
    destination: destinations[0],
    startDate: new Date('2021-11-29T22:55:56.845Z'),
    finishDate: new Date('2021-11-31T22:55:56.845Z'),
    basePrice: 50,
    offers: offers.find((offer) => offer.type = 'taxi').offers,
  }),

  generatePoint({
    type: 'taxi',
    destination: destinations[1],
    startDate: new Date('2021-12-01T10:00:56.845Z'),
    finishDate: new Date('2021-12-01T12:00:56.845Z'),
    basePrice: 1000,
    offers: offers.find((offer) => offer.type = 'taxi').offers,
  }),

  generatePoint({
    type: 'bus',
    destination: destinations[2],
    basePrice: 500,
    startDate: new Date('2021-10-01T16:00:56.845Z'),
    finishDate: new Date('2021-10-03T12:00:56.845Z'),
  }),
];

export {
  points,
  destinations,
  offers,
  //POINT_CITIES,
};
