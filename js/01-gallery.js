import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

function createGaleryEl(galleryElements) {
  return galleryElements
    .map(galleryEl => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${galleryEl.original}">
                <img
                class="gallery__image"
                src="${galleryEl.preview}"
                data-source="${galleryEl.original}"
                alt="${galleryEl.description}"
                />
            </a>
        </li>`;
    })
    .join('');
}
function onGaleryElClick(e) {
  e.preventDefault();
  createModalWindow(e);
}
function createModalWindow(e) {
  if (e.target.classList.value !== 'gallery__image') {
    return;
  }
  const urlBigPicture = e.target.dataset.source;
  const altBigPicture = e.target.alt;
  const instance = basicLightbox.create(
    `
    <div class="modal">
        <img src='${urlBigPicture}' alt ='${altBigPicture}'></img>
    </div>
`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onCloseModalOnEscBtn);
        function onCloseModalOnEscBtn(e) {
          if (e.code === 'Escape') {
            instance.close();
          }
          if (instance.visible() === false) {
            window.removeEventListener('keydown', onCloseModalOnEscBtn);
          }
        }
      },
    },
  );

  instance.show();
}
galleryRef.insertAdjacentHTML('beforeend', createGaleryEl(galleryItems));

galleryRef.addEventListener('click', onGaleryElClick);
