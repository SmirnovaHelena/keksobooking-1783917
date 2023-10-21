import './util.js';

import {initMap , resetMap} from './map.js';

import './slider.js';
import {getFormStatus, getInactiveMapFilters, onUserFormSubmit, resettingForm, onResetClick } from './user-form.js';

import './message.js';

initMap();

getFormStatus();
getInactiveMapFilters();

onUserFormSubmit(resettingForm, resetMap);
onResetClick();
