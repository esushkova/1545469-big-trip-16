const reducePointOffers = (totalPrice, { price }) => totalPrice + price;
const reducePointsPrice = (totalPrice, { basePrice, offers }) =>
  offers.length > 0
    ? offers.reduce(reducePointOffers, totalPrice + basePrice)
    : totalPrice + basePrice;

const calcTotalPrice = (points) => points.reduce(reducePointsPrice, 0);

export {calcTotalPrice};
