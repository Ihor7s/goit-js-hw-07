import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const imageMarkup = createImagesCardsMarkup(galleryItems);

gallery.addEventListener('click', onClickImageCollection);

function createImagesCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link href = '${original}' onclick="evt.preventDefault()" >
                    <img
                        class="gallery__image"
                        src= "${preview}"
                        data-source= "${original}"
                        alt= "${description}"
                    />
                </a>
            </div>`
            ;
    }).join('');
}

gallery.insertAdjacentHTML('beforeend', imageMarkup);

function onClickImageCollection(e) {
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const srcImgOriginal = e.target.dataset.source;

    basicLightbox.create(`
        <img src = '${srcImgOriginal}'>
        `).show();
}



