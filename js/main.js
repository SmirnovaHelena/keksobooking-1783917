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

// Возвращает случайное рандомное целое число в заданном диапазоне, которое будет являться индексом в масиве
const getRandomIntNumber = (a, b) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

const getRandomFloatNumber = (min, max, amount) => {
  if (min >= max) {
    throw Error(`Первое число диапазона должно быть меньше второго.\nВы ввели ${min} и ${max}`);
  }
  else if (min < 0) {
    throw Error(`Первое число диапазона не может быть меньше нуля.\nВы ввели ${min} и ${max}`);
  } else {
    const num = (Math.random() * (max - min) + min);
    return num.toFixed(amount);
  }
};

const getRandomValue = (value) => {
  const item = getRandomIntNumber(0, value.length - 1);
  return value[item];
};

const similarAd = () => ({
  author: {
 avatar: `img/avatars/user0${getRandomIntNumber(1, 9 )}.png`,
  },
  offer: {
    title: getRandomValue(TITLES),
address: `${getRandomFloatNumber(35.65000, 35.70000, 5)}, ${getRandomFloatNumber(139.70000, 139.80000, 5)}`,
    price: getRandomIntNumber(10, 100),
    type: getRandomValue(TYPES),
    rooms: getRandomIntNumber(1, 6),
    guests: getRandomIntNumber(1, 10),
    checkin: getRandomValue(TIMES),
    checkout: getRandomValue(TIMES),
features: FEATURES.slice(0, getRandomIntNumber(1, 5)),
    description: getRandomValue(DESCRIPTION_SET),
 photos: PHOTOS.slice(0, getRandomIntNumber(1, 3)),
  },
  location: {
    lat: getRandomFloatNumber(35.65000, 35.70000, 5),
    lng: getRandomFloatNumber(139.70000, 139.80000, 5),
  }
});

const similarAds = () => Array.from({ length: ADS_OFFER_NUMBER }, similarAd);

similarAds();

