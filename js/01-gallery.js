import { galleryItems } from './gallery-items.js';
// Change code below this line

//створення розмітки галереї
function generateGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </li>`
    )
    .join('');
}
//додавання розмітки в DOM
const gallery = document.querySelector('.gallery');
const markup = generateGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);

//додавання слухача на галерею
gallery.addEventListener('click', onClick);

//ініціалізація змінною для basicLightbox
let instance = null;

//відкриваємо модалку з зображенням, на яке клікнули
function onClick(event) {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}">`
    );
    instance.show();
    document.addEventListener('keydown', onKey);
  }
}

//закриття можалки клавішею Esc
function onKey(event) {
  if (event.key === 'Escape') {
    instance.close();
    instance = null;
    document.removeEventListener('keydown', onKey);
  }
}
