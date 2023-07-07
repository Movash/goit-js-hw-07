import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const allGallery = document.querySelector(".gallery");

const imagesListArr = galleryItems
.map((image) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
        <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
        />
    </a>
    </li>`;
}).join("");

allGallery.insertAdjacentHTML("beforeend", imagesListArr);

allGallery.addEventListener("click", showTitle);

function showTitle(evt) {
baseSettings(evt);
if(!evt.target.tagName === "IMG") {
    return
}
const selectedImg = evt.target.dataset.source;

const instance = basicLightbox.create(`
    <img src="${selectedImg}" alt="">
`);
instance.show();

allGallery.addEventListener("keydown", closeWithEsc);

function closeWithEsc(evt) {
if(evt.code === "Escape") {
    instance.close();
}
}
}

function baseSettings(evt) {
    evt.preventDefault();
}