import './util.js';

// import {getSimilarAd} from './data.js';
// import {initMap} from './map.js';
// eslint-disable-next-line no-unused-vars
import {initMap , resetMap} from './map.js';

import './slider.js';
// eslint-disable-next-line no-unused-vars
import { formStatus, inactiveMapFilters, onUserFormSubmit, resettingForm, onResetClick } from './user-form.js';

import './message.js';

/* eslint-disable no-console */
// const offersArray = Array.from({ length: 10 }, getSimilarAd);
// initMap(offersArray);
initMap();

formStatus();
inactiveMapFilters();

onUserFormSubmit(resettingForm);
onResetClick();
