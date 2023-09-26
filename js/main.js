import './util.js';
// eslint-disable-next-line no-unused-vars

// import { getSimilarAd, getSimilarAds } from './data.js';
// import {createPopup} from './popup.js';
// eslint-disable-next-line no-unused-vars
// import { mapInit, setStartAddress, setOnMapLoad, setOfferPinMarker, resetMap } from './map.js';

// import {formDisabled, formEnabled} from './form_validation.js';

import {getSimilarAd} from './data.js';
import {mapInit} from './map.js';

// eslint-disable-next-line no-unused-vars
import {formStatus , inactiveMapFilters} from './form_validation.js';

import './user_form.js';
// import './map.js';
import './slider.js';

/* eslint-disable no-console */

// const mapCanvas = document.querySelector('#map-canvas');

// const offer = getSimilarAd();
// const popupNode = createPopup(offer);
// mapCanvas.append(popupNode);

const offersArray = Array.from({ length: 5 }, getSimilarAd);
mapInit(offersArray);
