
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
  } else if (min < 0) {
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

export const printNumerals = (number, titles) => {
  number = Math.abs(number);
  if (Number.isInteger(number)) {
    const cases = [2, 0, 1, 1, 1, 2];
    const text =
      titles[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ];
    return `${text}`;
  }
  return `${titles[1]}`;
};

// export {getRandomFloatNumber, getRandomIntNumber, getRandomValue};
const escapeKey = (evt) => evt.key === 'Escape';
const enterKey = (evt) => evt.key === 'Enter';

export {getRandomFloatNumber, getRandomIntNumber, getRandomValue, escapeKey, enterKey};
