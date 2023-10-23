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

const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';


const setAlertMessage = (status = 'error', message) => {
  const templateAlertMessage = document.querySelector(`#${status}`).content.querySelector(`.${status}`).cloneNode(true);
  const alertButton = templateAlertMessage.querySelector('.error__button');
  const errorMessage = templateAlertMessage.querySelector('.error__message');
  if(alertButton) {
    alertButton.addEventListener('click', () => {
      templateAlertMessage.remove();
    });
  }
  if(message) {
    errorMessage.textContent = message;
  }
  document.body.append(templateAlertMessage);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, isEnterKey, debounce, setAlertMessage};
