import './util.js';

import {initMap , resetMap} from './map.js';

import './slider.js';
import {getFormStatus, toggleInactiveMapFilters, handleUserFormSubmit, resettingForm, runResetClick } from './user-form.js';

import './message.js';

initMap();

getFormStatus();
toggleInactiveMapFilters();

handleUserFormSubmit(resettingForm, resetMap);
runResetClick();
