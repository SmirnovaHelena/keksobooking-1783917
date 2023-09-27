import './util.js';

import {getSimilarAd} from './data.js';
import {mapInit} from './map.js';

// eslint-disable-next-line no-unused-vars
import './slider.js';
// eslint-disable-next-line no-unused-vars
import { formStatus, inactiveMapFilters, onUserFormSubmit, resettingForm, onResetClick } from './user_form.js';

/* eslint-disable no-console */
const offersArray = Array.from({ length: 10 }, getSimilarAd);
mapInit(offersArray);

onUserFormSubmit(resettingForm);
onResetClick();
