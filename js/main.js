import './util.js';

import {getSimilarAd} from './data.js';
import {mapInit} from './map.js';

// eslint-disable-next-line no-unused-vars
import {formStatus , inactiveMapFilters} from './form_validation.js';

import './user_form.js';

import './slider.js';

/* eslint-disable no-console */
const offersArray = Array.from({ length: 5 }, getSimilarAd);
mapInit(offersArray);
