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
    galleryImageEl.dataset.source = original;
    galleryImageEl.alt = description;

    galleryLinkEl.appendChild(galleryImageEl);
    galleryItemEl.appendChild(galleryLinkEl);

    return galleryItemEl;
}

const galleryMarkup = galleryItems.map(createGalleryItem);
galleryEl.append(...galleryMarkup);

galleryEl.addEventListener('click', (event) => {
    event.preventDefault();

     if (event.target.nodeName !== 'IMG') {
    return;
  }

    const largeImageURL = event.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
`)

    instance.show()
    
const keyPress = (event) => {
    if (event.code === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', keyPress);
    }
  };

    document.addEventListener('keydown', keyPress);
})


