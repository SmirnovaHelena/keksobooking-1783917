// eslint-disable-next-line no-unused-vars
const ALERT_TIME = 5000;
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
// eslint-disable-next-line no-unused-vars
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

const escapeKey = (evt) => evt.key === 'Escape';
const enterKey = (evt) => evt.key === 'Enter';

// export {getRandomFloatNumber, getRandomIntNumber, getRandomValue, escapeKey, enterKey};
const setAlertMessage = (status = 'error') => {
  const templateAlertMessage = document.querySelector(`#${status}`).content.querySelector(`.${status}`).cloneNode(true);
  // const alertMessageText = templateAlertMessage.querySelector(`.${status}__message`);
  const alertButton = templateAlertMessage.querySelector('.error__button');
  // alertMessageText.textContent = message;

  if(alertButton) {
    alertButton.addEventListener('click', () => {
      templateAlertMessage.remove();
    });
  }
  document.body.append(templateAlertMessage);

  // const alertContainer = document.createElement('div');
  // alertContainer.style.zIndex = '100';
  // alertContainer.style.position = 'absolute';
  // alertContainer.style.left = '0';
  // alertContainer.style.top = '0';
  // alertContainer.style.right = '0';
  // alertContainer.style.padding = '10px 3px';
  // alertContainer.style.fontSize = '30px';
  // alertContainer.style.textAlign = 'center';
  // alertContainer.style.backgroundColor = 'red';

  // alertContainer.textContent = message;

  // setTimeout(() => {
  //   templateAlertMessage.remove();
  // }, ALERT_TIME);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomFloatNumber, getRandomIntNumber, escapeKey, enterKey, debounce, setAlertMessage};
