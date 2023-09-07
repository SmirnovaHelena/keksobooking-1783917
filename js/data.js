import {getRandomFloatNumber, getRandomIntNumber, getRandomValue} from './util.js';

const ADS_OFFER_NUMBER = 10;

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const TITLES = [
  'Best of Best',
  'Beautiful one',
  'Apartment',
  'Palace',
];

const TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const DESCRIPTION_SET = [
  'Потрясающее жильё',
  'Берите, не думайте',
  'Единственная и неповторимая',
  'Квартирка, как квартирка',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;

const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const PRECISION = 5;

const MIN_PRICE = 10;
const MAX_PRICE = 100;

const MIN_ROOMS = 1;
const MAX_ROOMS = 6;

const MIN_GUESTS = 1;
const MAX_GUESTS = 10;

const userIds = [];

export function buildLocation() {
  return {
    lat: getRandomFloatNumber(LAT_MIN, LAT_MAX, PRECISION),
    lng: getRandomFloatNumber(LNG_MIN, LNG_MAX, PRECISION),
  };
}

function createUser() {
  let userId;
  while(!userId || userIds.includes(userId)) {
    const randomNumber = getRandomIntNumber(1, ADS_OFFER_NUMBER);
    if (randomNumber < 10) {
      userId = `0${randomNumber}`;
    } else {
      userId = `${randomNumber}`;
    }
  }
  userIds.push(userId);

  return {
    avatar: `img/avatars/user${userId}.png`,
  };
}

export const getSimilarAd = () => {
  const location = buildLocation();
  return {
    author: createUser(),
    offer: {
      title: getRandomValue(TITLES),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomIntNumber(MIN_PRICE, MAX_PRICE),
      type: getRandomValue(TYPES),
      rooms: getRandomIntNumber(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomIntNumber(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomValue(TIMES),
      checkout: getRandomValue(TIMES),
      features: FEATURES.slice(0, getRandomIntNumber(1, 5)),
      description: getRandomValue(DESCRIPTION_SET),
      photos: PHOTOS.slice(0, getRandomIntNumber(1, 3)),
    },
    location
  };
};

const getSimilarAds = () => Array.from({ length: ADS_OFFER_NUMBER }, getSimilarAd);

export {getSimilarAds};
