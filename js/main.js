import './util.js';
// eslint-disable-next-line no-unused-vars
import { getSimilarAd, getSimilarAds } from './data.js';
import {createPopup} from './popup.js';

/* eslint-disable no-console */

const mapCanvas = document.querySelector('#map-canvas');

const offer = getSimilarAd();
const popupNode = createPopup(offer);
mapCanvas.append(popupNode);
