const pictures = document.querySelector('.pictures');
const template = document.querySelector('#picture').content;
const docFragment = document.createDocumentFragment();

function createThumbnails(data) {
  data.forEach((i) => {
  const pic = template.cloneNode(true);
  pic.querySelector('.pictures__img').src = i.url;
  pic.querySelector('.picture__likes').textContent = i.likes;
  pic.querySelector('.picture__comments').textContent = i.comments.length;
  docFragment.append(pic);
});
pictures.append(docFragment)
};

export {createThumbnails};
