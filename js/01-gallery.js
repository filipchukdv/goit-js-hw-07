import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const onGalleryClick = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const imgRef = e.target.dataset.source;
  const onEscKey = e => {
    if (e.key === 'Escape') instance.close();
  };

  const instance = basicLightbox.create(`<img src=${imgRef}>`, {
    onShow: instance => {
      document.addEventListener('keydown', onEscKey);
    },
    onClose: instance => {
      document.removeEventListener('keydown', onEscKey);
    },
  });

  instance.show();
};

galleryRef.addEventListener('click', onGalleryClick);

const createGalleryMarkUp = items => {
  items.forEach(item => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery__link');
    galleryLink.href = item.original;

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery__image');
    galleryImg.src = item.preview;
    galleryImg.alt = item.description;
    galleryImg.dataset.source = item.original;

    galleryLink.append(galleryImg);
    galleryItem.append(galleryLink);
    galleryRef.append(galleryItem);
  });
};

createGalleryMarkUp(galleryItems);
