import { makeRequest } from './api.js';
import { getSuccessfulDownloaderForm, getFailedDownloaderForm } from './message.js';
import { resetSlider } from './slider.js';
import { resetImages } from './avatar.js';

const orderForm = document.querySelector('.ad-form');
const capacityElement = orderForm.querySelector('#capacity');
const rooms = orderForm.querySelector('#room_number');
const price = orderForm.querySelector('#price');
const typeOfHousing = orderForm.querySelector('#type');
const timeIn = orderForm.querySelector('#timein');
const timeOut = orderForm.querySelector('#timeout');

const mapFilters = document.querySelector('.map__filters');
const submitButton = orderForm.querySelector('.ad-form__submit');
const resetButton = orderForm.querySelector('.ad-form__reset');

const ROOMS_TO_GUESTS = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const GUESTS_TO_ROOMS = {
  1: ['1', '2', '3 комнаты'],
  2: ['1', '2 комнаты'],
  3: ['3 комнаты'],
  0: ['100 комнат']
};

const ROOM_TYPE_PRICE = {
  bungalow: '0',
  flat: '1000',
  hotel: '3000',
  house: '5000',
  palace: '10000'
};

const MIN_LENGTH_TITLE = 30;
const MAX_LENGTH_TITLE = 100;

const MAX_VALUE_PRICE = 100000;

const pristine = new Pristine(orderForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
}, true);

function validateTitle (value) {
  return value.length >= MIN_LENGTH_TITLE && value.length <= MAX_LENGTH_TITLE;
}

pristine.addValidator(
  orderForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);

function validatePrice (value) {
  return value.length < MAX_VALUE_PRICE;
}

pristine.addValidator(
  orderForm.querySelector('#price'),
  validatePrice,
  'Не более 100 000'
);

const checkCapacity = () => ROOMS_TO_GUESTS[rooms.value].includes(capacityElement.value);

const getСapacityElementErrorMessage = () => `Для такого количества гостей подойдёт ${GUESTS_TO_ROOMS[capacityElement.value].join(' или ')}`;

pristine.addValidator(
  capacityElement,
  checkCapacity,
  getСapacityElementErrorMessage
);

const getRoomElementErrorMessage = () => {
  if (rooms.value.value === '100') {
    return 'Комнаты не для гостей';
  }
  return 'Для такого количества гостей нужно больше комнат';
};

pristine.addValidator(
  rooms,
  checkCapacity,
  getRoomElementErrorMessage
);

const onRoomNumberChange = () => {
  pristine.validate(capacityElement);
  pristine.validate(rooms);
};

const onGuestsNumberChange = () => {
  pristine.validate(capacityElement);
  pristine.validate(rooms);
};

rooms.addEventListener('change', onRoomNumberChange);
capacityElement.addEventListener('change', onGuestsNumberChange);

const onTimeInChange = () => {
  timeOut.value = timeIn.value;
};

const onTimeOutChange = () => {
  timeIn.value = timeOut.value;
};

timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);

const formChangeStatus = (form) => {
  form.querySelectorAll('fieldset, select.map__filter').forEach((fieldItem) => {
    fieldItem.disabled = !fieldItem.disabled;
  });
};

const setFormStatus = () => {
  orderForm.classList.toggle('ad-form--disabled');

  formChangeStatus(orderForm);
};

const toggleMapFiltersStatus = () => {
  mapFilters.classList.toggle('ad-form--disabled');

  formChangeStatus(mapFilters);
};

const priceCheck = (value) => Number.parseInt(value, 10) >= ROOM_TYPE_PRICE[typeOfHousing.value];orderForm.reset();

const getPriceErrorMessage = () => `Стоимость должна быть выше ${ROOM_TYPE_PRICE[typeOfHousing.value]}`;

pristine.addValidator(
  price,
  priceCheck,
  getPriceErrorMessage
);

const onPriceCheck = () => pristine.validate(price);

price.addEventListener('change', onPriceCheck);
typeOfHousing.addEventListener('change', onPriceCheck);

const onTypeOfHousingChange = () => {
  price.placeholder = ROOM_TYPE_PRICE[typeOfHousing.value];
};

typeOfHousing.addEventListener('change', onTypeOfHousingChange);

const resettingForm = () => {
  orderForm.reset();
  mapFilters.reset();
  price.placeholder = 0;
  pristine.reset();
  resetImages();
};

const setResetClickListener = () => {
  resetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resettingForm();
  });
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess, onError) => {
  orderForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      blockSubmitButton();
      makeRequest(() => {
        onSuccess();
        resetSlider();
        getSuccessfulDownloaderForm();
        unblockSubmitButton();
      }, () => {
        onError();
        getFailedDownloaderForm();
        unblockSubmitButton();
      },
      'POST',
      formData);
    }
  });
};

export {setFormStatus, toggleMapFiltersStatus, setUserFormSubmit, resettingForm, setResetClickListener};
