import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

function createGaleryEl(galleryElements) {
  return galleryElements
    .map(galleryEl => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${galleryEl.original}">
                <img class="gallery__image" src="${galleryEl.preview}" alt="${galleryEl.description}" title='${galleryEl.description}'/>
            </a>
        </li>`;
    })
    .join('');
}
function onGaleryElClick(e) {
  createModalWindow(e);
  validClick(e);
  linkBLocking(e);
}
function validClick(e) {
  if (e.target.classList.value !== 'gallery__image') {
    return;
  }
}
function linkBLocking(e) {
  e.preventDefault();
}
function createModalWindow(e) {
  var lightbox = new SimpleLightbox('.gallery a', {
    /* options */
    captionDelay: '250',
  });
}
galleryRef.insertAdjacentHTML('beforeend', createGaleryEl(galleryItems));

galleryRef.addEventListener('click', onGaleryElClick);

{
}
