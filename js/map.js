import {createPopup} from './popup.js';

import {filterData} from './sorting.js';
import {formStatus, inactiveMapFilters} from './user-form.js';
import {makeRequest} from './api.js';
import {setAlertMessage, debounce} from './util.js';

const addressElement = document.querySelector('#address');

// const START_COORDINATE = {
//   startLat: 35.683171,
//   startLng: 139.753143
// };
const resetButton = document.querySelector('.ad-form__reset');
const mapFilters = document.querySelector('.map__filters');
// eslint-disable-next-line no-unused-vars
const ALLERT_MESSAGE = 'Не удалось загрузить данные, повторите попытку.';
const MAX_ELEMENT = 10;
let options = [];

const COORDINATE = {
  lat: 35.683171,
  lng: 139.753143
};

const DEFAULT_ZOOM = 10;

const map = L.map('map-canvas')
  // .setView({
  //   lat: START_COORDINATE.startLat,
  //   lng: START_COORDINATE.startLng
  .on('load', () => {
    formStatus();
    makeRequest(onSuccess, onError, 'GET');
  }).setView({
    lat: COORDINATE.lat,
    lng: COORDINATE.lng,
  }, DEFAULT_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const pointLayer = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    // lat: START_COORDINATE.startLat,
    // lng: START_COORDINATE.startLng,
    lat: COORDINATE.lat,
    lng: COORDINATE.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const setMainPinMarker = () => mainPinMarker.addTo(map);

const setStartAddress = () => {
  const { lat, lng } = mainPinMarker.getLatLng();
  addressElement.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

const setAddressOnPinMove = () => {
  mainPinMarker.on('move', (evt) => {
    const { lat, lng } = evt.target.getLatLng();
    addressElement.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });
};

// const setOfferPinMarker = (offers) => {
const setOfferPinMarker = (offers, cb) => {
  offers.forEach((offer) => {
    const offerMarker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng,
      },
      {
        icon,
      }
    );
    // offerMarker.addTo(map).bindPopup(createPopup(offer));
    offerMarker.addTo(pointLayer).bindPopup(cb(offer));
  });
};

const setOnMapLoad = (cb) => map.on('load', cb);

// const initMap = (offersData) => {
const initMap = () => {
  setStartAddress();
  // setOfferPinMarker(offersData);
  setMainPinMarker();
  setAddressOnPinMove();
};

// const resetMap = () => {
function resetMap () {
  map.closePopup();
  map.setView({
    // lat: START_COORDINATE.startLat,
    // lng: START_COORDINATE.startLng
    lat: COORDINATE.lat,
    lng: COORDINATE.lng
  }, DEFAULT_ZOOM);
  mainPinMarker.setLatLng({
    // lat: START_COORDINATE.startLat,
    // lng: START_COORDINATE.startLng
    lat: COORDINATE.lat,
    lng: COORDINATE.lng
  });
  // };
  removePoints();

  // export { initMap, setStartAddress, setOnMapLoad, setMainPinMarker, setOfferPinMarker, resetMap };

  setOfferPinMarker(options.slice(0, MAX_ELEMENT), createPopup);
}

function removePoints () {
  pointLayer.clearLayers();
}

function onMapFilterChange () {
  removePoints();

  setOfferPinMarker(filterData(options), createPopup);
}

function onSuccess (data) {
  options = data.slice();
  // setAlertMessage('success');
  inactiveMapFilters();
  setOfferPinMarker(options.slice(0, MAX_ELEMENT), createPopup);

  mapFilters.addEventListener('change', debounce(onMapFilterChange));
}
// eslint-disable-next-line no-unused-vars
function onError (dataError) {
  // console.log(dataError);
  // inactiveMapFilters();
  setAlertMessage('error');
}

resetButton.addEventListener('click', () => {
  resetMap();
});

export { initMap, setStartAddress, setOnMapLoad, setMainPinMarker, setOfferPinMarker, resetMap };
