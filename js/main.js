import './util.js';

import {initMap , resetMap} from './map.js';

import './slider.js';
import {setFormStatus, toggleMapFiltersStatus, setUserFormSubmit, resettingForm, setResetClickListener } from './user-form.js';

import './message.js';

initMap();

setFormStatus();
toggleMapFiltersStatus();
function onSuccessSubmitForm(){
  resettingForm();
  resetMap();
}
function onErrorSubmitForm(){
  return 'Ошибка отправки объявления';
}

setUserFormSubmit(onSuccessSubmitForm, onErrorSubmitForm);
setResetClickListener();
