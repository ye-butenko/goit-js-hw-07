import { galleryItems } from './gallery-items.js';
// Change code below this line

//створення розмітки галереї
function generateGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }, index) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" data-index="${index}"/>
          </a>
        </li>`
    )
    .join('');
}
//додавання розмітки в DOM
const gallery = document.querySelector('.gallery');
const markup = generateGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', markup);

//створення SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

//додавання слухача на галерею
gallery.addEventListener('click', onClick);

//відкриваємо модалку з зображенням, на яке клікнули
function onClick(event) {
  event.preventDefault();
  if (event.target.tagName === 'IMG') {
    const currentIndex = event.target.dataset.index;
    lightbox.open(currentIndex);
  }
}
