const uplButton = document.querySelector('#upload-file');
const uplOverlay = document.querySelector('.img-upload__overlay');
const uplCancel = document.querySelector('#upload-cancel');

uplButton.addEventListener('change', ()=>{
  uplOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

uplCancel.addEventListener('click', ()=>{
  uplOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
});
