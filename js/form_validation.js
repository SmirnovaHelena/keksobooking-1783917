const addForm = document.querySelector('.ad-form');

const mapFilters = document.querySelector('.map__filters');

// const toggleElementsDisabled = (elements, state) => {
//   for (const element of elements) {
//     element.disabled = state;
//   }
// };
const formChangeStatus = (form) => {
  form.querySelectorAll('fieldset, select.map__filter').forEach((fieldItem) => {
    fieldItem.disabled = !fieldItem.disabled;
  });
};

// const formDisabled = () => {
//   addForm.classList.add('ad-form--disabled');
//   mapFilters.classList.add('ad-form--disabled');
const formStatus = () => {
  addForm.classList.toggle('ad-form--disabled');

  //   toggleElementsDisabled(addForm.children, true);
  //   toggleElementsDisabled(mapFilters.children, true);
  // };
  formChangeStatus(addForm);
};

// const formEnabled = () => {
//   addForm.classList.remove('ad-form--disabled');
//   mapFilters.classList.remove('ad-form--disabled');
const inactiveMapFilters = () => {
  mapFilters.classList.toggle('ad-form--disabled');

  //   toggleElementsDisabled(addForm.children, false);
  //   toggleElementsDisabled(mapFilters.children, false);
  // };

  formChangeStatus(mapFilters);
};

// export {formDisabled, formEnabled};
export {formStatus , inactiveMapFilters};
