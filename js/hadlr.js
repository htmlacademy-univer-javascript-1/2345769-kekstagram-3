import {resetFilter} from './effect.js';
import {resetTransform} from './scale.js';
import {uploadPicture} from './api.js';
import {blockSubmitButton, hideModal, showModal, showFailMessage, showSuccessMessage, unblockSubmitButton} from './ovrl.js';

const uploadForm = document.querySelector('#upload-select-image');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancelButton = document.querySelector('#upload-cancel');
const uploadFileButton = document.querySelector('#upload-file');
const textCommentElement = document.querySelector('.text__description');
const textHashtagElement = document.querySelector('.text__hashtags');

const resetForm = function () {
  resetFilter();
  resetTransform();
  textCommentElement.value = '';
  textHashtagElement.value = '';
  uploadFileButton.value = null;
};

uploadFileButton.addEventListener('change', () => {
  showModal(uploadOverlay);
});

uploadCancelButton.addEventListener('click', () => {
  resetForm();
  hideModal(uploadOverlay);
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  blockSubmitButton();
  const formData = new FormData(evt.target);
  uploadPicture(formData, () => {showSuccessMessage(); resetForm();},
    showFailMessage, () => {hideModal(uploadOverlay); unblockSubmitButton();});
});
