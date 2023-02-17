import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', itemsMarkup);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
    e.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)
    
    instance.show(() =>  document.addEventListener("keydown", closeModal));
    
    function closeModal(e) {
        if (e.code === "Escape") {
            instance.close(() => document.removeEventListener("keydown", closeModal));
        };
    };
};

function createGalleryItemsMarkup(object) {
    return object.map(({preview, original, description}) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
            </a>
        </div>`;
    }).join('');
};

