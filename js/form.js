const addForm = document.querySelector('.ad-form');

const mapFilters = document.querySelector('.map__filters');

const toggleElementsDisabled = (elements, state) => {
  for (const element of elements) {
    element.disabled = state;
  }
};

const formDisabled = () => {
  addForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');

  toggleElementsDisabled(addForm.children, true);
  toggleElementsDisabled(mapFilters.children, true);
};

const formEnabled = () => {
  addForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');

  toggleElementsDisabled(addForm.children, false);
  toggleElementsDisabled(mapFilters.children, false);
};

export {formDisabled, formEnabled};

