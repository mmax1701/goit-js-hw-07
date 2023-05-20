import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createGalleryItem({ original, preview, description }) {
    const galleryItemEl = document.createElement('li');
    galleryItemEl.classList.add('gallery__item');

    const galleryLinkEl = document.createElement('a');
    galleryLinkEl.classList.add('gallery__link');
    galleryLinkEl.href = original;

    const galleryImageEl = document.createElement('img');
    galleryImageEl.classList.add('gallery__image');
    galleryImageEl.src = preview;
    galleryImageEl.alt = description;

    galleryLinkEl.appendChild(galleryImageEl);
    galleryItemEl.appendChild(galleryLinkEl);

    return galleryItemEl;
}

const galleryMarkup = galleryItems.map(createGalleryItem);
galleryEl.append(...galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', { captions: true, captionDelay: 250, captionsData: 'alt' });

console.log(galleryItems);
