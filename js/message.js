import { isEscapeKey, isEnterKey } from './util.js';

const body = document.querySelector('body');

const patternSuccess = document.querySelector('#success').content.querySelector('.success');
const patternFailed = document.querySelector('#error').content.querySelector('.error');

const removeMessagePopup = () =>{
  const messageElement = body.querySelector('.success');
  if(messageElement) {
    messageElement.remove();
  }
};

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    removeMessagePopup();
    document.removeEventListener('click', onSuccessMessageClick);
    document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  }
};

function onSuccessMessageClick () {
  removeMessagePopup();
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  document.removeEventListener('click', onSuccessMessageClick);
}

const closeOpenSuccessMessage = () => {
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  document.addEventListener('click', onSuccessMessageClick);
};

const getSuccessfulDownloaderForm = () => {
  const ticetElement = patternSuccess.cloneNode(true);
  body.append(ticetElement);
  closeOpenSuccessMessage();
};

const onFailedMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    body.removeChild(body.querySelector('.error'));
  }
};

const onFailedMessageClick = () => {
  body.removeChild(body.querySelector('.error'));
};

const onFailedMessageEnterKeydown = (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    body.removeChild(body.querySelector('.error'));
  }
};

const closeOpenFailedMessage = (buttonErrorForm) => {
  document.addEventListener('keydown', onFailedMessageEscKeydown, { once: true });
  document.addEventListener('click', onFailedMessageClick, { once: true });
  buttonErrorForm.addEventListener('keydown', onFailedMessageEnterKeydown, { once: true });
};

const getFailedDownloaderForm = () => {
  const ticetElement = patternFailed.cloneNode(true);
  body.append(ticetElement);
  closeOpenFailedMessage(document.querySelector('.error__button'));
};

export {getSuccessfulDownloaderForm, getFailedDownloaderForm};
