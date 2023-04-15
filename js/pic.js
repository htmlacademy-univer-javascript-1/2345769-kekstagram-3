let uplButton = document.querySelector('#upload-file');
let uplOverlay = document.querySelector('.img-upload__overlay');
let uplCancel = document.querySelector('#upload-cancel');

uplButton.addEventListener('change', ()=>{
  uplOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

uplCancel.addEventListener('click', ()=>{
  uplOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
});
