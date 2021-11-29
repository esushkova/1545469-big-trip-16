//случайное целое число
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Случайный город из массива
const getCity = () => {
  const cities = ['Amsterdam', 'Chamonix', 'Paris'];
  const randomIndex = getRandomIntInclusive(0, cities.length - 1);
  return cities[randomIndex];
};

//Случаный тип
const getType = () => {
  const types = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

  const randomIndex = getRandomIntInclusive(0, types.length - 1);
  return types[randomIndex];
};

//случайные фото
const getRandomPhotos = () => {
  const photos = [];
  const count = getRandomIntInclusive(0, 5);
  for (let i = 0; i < count; i++) {
    photos.push(`http://picsum.photos/248/152?r=${getRandomIntInclusive(0, 100)}`);
  }
  return photos;
};

//избранное или нет
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

  let descriptionArray = [];
  const randomCount = getRandomIntInclusive(1, 5);

  for(let i = 1; i <= randomCount; i++) {
    const randomIndex = getRandomIntInclusive(0, description.length - 1);

    descriptionArray.push(description[randomIndex]);
  }

  return descriptionArray;
};



export const generateEvent = () => {
  return {
    destination: getCity(),
    type: getType(),
    startDate,
    finishDate,
    price,
    offers,
    isFavorite: getIsFavourite(),
    photos: getRandomPhotos(),
    description: generateDescription(),
  };
};
