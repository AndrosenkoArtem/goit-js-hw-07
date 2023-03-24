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

galleryRef.insertAdjacentHTML('beforeend', createGaleryEl(galleryItems));

new SimpleLightbox('.gallery a', {
  /* options */
  captionDelay: '250',
});
